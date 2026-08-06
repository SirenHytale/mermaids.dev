import type { Metadata } from "next";
import Script from "next/script";

/**
 * Root layout - the <head> half of _includes/head.html: the compiled theme
 * stylesheet, lunr + the theme's own JS (processed copies of the originals),
 * Google Analytics, and the favicon. React 19 hoists the <link> tags rendered
 * here into <head>.
 *
 * just-the-docs.js is readyState-guarded (jtd.onReady), so loading it
 * beforeInteractive keeps its init order identical to the synchronous original.
 */
export const metadata: Metadata = {
  title: "Siren's Docs",
  description: "Docs for Siren's Hytale Mods!",
  metadataBase: new URL("https://www.mermaids.dev"),
  icons: { icon: [{ url: "/assets/images/utils/siren-logo.ico", type: "image/x-icon" }] },
};

const GA_ID = "G-ZFBJQDRH01";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body>
        <link rel="stylesheet" href="/assets/css/just-the-docs-default.css" />
        {children}
        <Script src="/assets/js/vendor/lunr.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/just-the-docs.js" strategy="beforeInteractive" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { 'anonymize_ip': true });`}
        </Script>
      </body>
    </html>
  );
}
