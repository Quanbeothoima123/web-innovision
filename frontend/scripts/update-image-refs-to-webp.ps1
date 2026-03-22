param(
  [switch]$DryRun
)

$ErrorActionPreference = "Stop"

$projectRoot = (Get-Location).Path
$publicDir = Join-Path $projectRoot "public"
$srcAppDir = Join-Path $projectRoot "src/app"

if (!(Test-Path $publicDir)) {
  throw "Missing directory: $publicDir"
}
if (!(Test-Path $srcAppDir)) {
  throw "Missing directory: $srcAppDir"
}

Write-Host "Project: $projectRoot"
Write-Host "Public : $publicDir"
Write-Host "SrcApp : $srcAppDir"
Write-Host ""

# Build set of existing .webp assets in /public (stored as URL paths like /foo/bar.webp).
$webpSet = New-Object "System.Collections.Generic.HashSet[string]" ([System.StringComparer]::OrdinalIgnoreCase)
$publicFull = (Resolve-Path $publicDir).Path.TrimEnd('\')

Get-ChildItem -Path $publicDir -Recurse -File -Filter "*.webp" | ForEach-Object {
  $rel = $_.FullName.Substring($publicFull.Length).TrimStart('\') -replace '\\','/'
  [void]$webpSet.Add("/$rel")
}

Write-Host ("Found {0} .webp files in public" -f $webpSet.Count)
Write-Host ""

$allowedExt = @(
  ".js", ".jsx", ".ts", ".tsx",
  ".css", ".scss", ".sass", ".less",
  ".md", ".mdx",
  ".json", ".yml", ".yaml",
  ".html"
)

# Match URL-like paths ending in .png/.jpg/.jpeg (optionally with querystring).
$imgRe = New-Object System.Text.RegularExpressions.Regex(
  '(?i)(?<path>/[^"''\s\)]+?)\.(?<ext>png|jpe?g)(?<qs>\?[^"''\s\)]*)?',
  [System.Text.RegularExpressions.RegexOptions]::Compiled
)

$changedFiles = New-Object System.Collections.Generic.List[string]
$missingWebp = @{}
$totalReplacements = 0

$files = Get-ChildItem -Path $srcAppDir -Recurse -File | Where-Object { $allowedExt -contains $_.Extension.ToLowerInvariant() }
foreach ($f in $files) {
  $text = [System.IO.File]::ReadAllText($f.FullName)

  $newText = $imgRe.Replace($text, {
    param($m)
    $p = $m.Groups["path"].Value
    $qs = $m.Groups["qs"].Value

    $webp = "$p.webp"
    if ($webpSet.Contains($webp)) {
      $script:totalReplacements++
      return "$webp$qs"
    }

    if (!$script:missingWebp.ContainsKey($p)) {
      $script:missingWebp[$p] = New-Object System.Collections.Generic.HashSet[string] ([System.StringComparer]::OrdinalIgnoreCase)
    }
    [void]$script:missingWebp[$p].Add($m.Value)
    return $m.Value
  })

  if ($newText -ne $text) {
    $changedFiles.Add($f.FullName) | Out-Null
    if (!$DryRun) {
      [System.IO.File]::WriteAllText($f.FullName, $newText)
    }
  }
}

Write-Host ("Changed files      : {0}" -f $changedFiles.Count)
Write-Host ("Total replacements : {0}" -f $totalReplacements)

if ($missingWebp.Count -gt 0) {
  Write-Host ""
  Write-Host "Paths with no matching .webp in public (left unchanged):"
  foreach ($k in ($missingWebp.Keys | Sort-Object)) {
    Write-Host ("- {0}" -f $k)
  }
}

if ($DryRun) {
  Write-Host ""
  Write-Host "DryRun: no files were written."
}

