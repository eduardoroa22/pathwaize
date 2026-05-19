import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const MATOMO_SNIPPET = `
  var _paq = window._paq = window._paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//analytics.inglesbienhablado.com/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '6']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pathwaize Intelligence — Jarvis Console",
  description:
    "AI-first operating layer for real estate investors. Orchestrated agents, human-in-the-loop approvals, and proprietary skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Matomo */}
        <script dangerouslySetInnerHTML={{ __html: MATOMO_SNIPPET }} />
        {/* End Matomo Code */}
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        {/* Matomo Image Tracker (noscript fallback) */}
        <noscript>
          <img
            referrerPolicy="no-referrer-when-downgrade"
            src="https://analytics.inglesbienhablado.com/matomo.php?idsite=6&rec=1"
            style={{ border: 0 }}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
