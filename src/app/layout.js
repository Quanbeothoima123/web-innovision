import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

export const metadata = {
  title: "Innovision",
  description: "Innovision website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
      </head>

      <body>
        <div id="root">
          <SiteChrome>{children}</SiteChrome>
        </div>
      </body>
    </html>
  );
}
