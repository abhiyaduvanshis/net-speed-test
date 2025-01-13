import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Speedtest - The Global Broadband Speed Test",
  description: "Use Speedtest on all your devices with our free desktop and mobile apps.",
  keywords:"speed,test,speedtest,speed test,bandwidth speed test,internet speed test,broadband speed test,speakeasy,flash,cnet,internet,network,connection,broadband,bandwidth,latency,ping,throughput,download,upload,connection,dsl,adsl,cable,t1,isp,voip,ip,ip address,tcp"
};

export const googleTag = {

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-VVNDYFBP3C`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VVNDYFBP3C', {
                page_path: window.location.pathname,
              });
            `,
          }}
        ></script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
