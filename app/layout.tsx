import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const fontSans = Roboto({ subsets: ["latin"], weight: ['100', '300', '400', '500', '700', '900'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2083432074936499"
          crossOrigin="anonymous"
        />
      </head>
      <body className={fontSans.className}>
      <ins
        className={'adsbygoogle'}
        style={{
          display: 'block'
        }}
        data-ad-client="ca-pub-2083432074936499"
        data-ad-slot="6692300464"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: '2083432074936499',
            enable_page_level_ads: true });`
        }}
      />
      {children}
      </body>
    </html>
  );
}
