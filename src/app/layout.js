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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
