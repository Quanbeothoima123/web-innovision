import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Innovision",
    template: "%s | Innovision",
  },
  description: "Innovision website",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "Innovision",
    title: "Innovision",
    description: "Innovision website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Innovision",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Innovision",
    description: "Innovision website",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Optional: extra hints */}
        <meta name="theme-color" content="#ffffff" />
      </head>

      <body>
        <div id="root">
          <SiteChrome>{children}</SiteChrome>
        </div>
      </body>
    </html>
  );
}
