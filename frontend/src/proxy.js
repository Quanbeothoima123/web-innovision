import { NextResponse } from "next/server";

import { ADMIN_SESSION_COOKIE, getAdminSessionValue } from "@/lib/adminAuth";

export function proxy(request) {
  const { pathname, search } = request.nextUrl;
  const session = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  const isAuthorized = session === getAdminSessionValue();

  const isAdminPath = pathname.startsWith("/admin");
  const isLoginPath = pathname === "/admin/login";

  if (isAdminPath && !isLoginPath && !isAuthorized) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    url.searchParams.set("next", `${pathname}${search || ""}`);
    return NextResponse.redirect(url);
  }

  if (isLoginPath && isAuthorized) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/manage/blogs";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
