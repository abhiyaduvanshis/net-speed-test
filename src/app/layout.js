import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ['latin'], // Specify the character subset
  weight: ['400', '700'], // Specify the weights you want to include
  style: ['normal', 'italic'], // Specify styles (optional)
  variable: '--font-barlow', // Define a CSS variable for the font (optional)
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
      <body
        className={barlow.variable}
      >
        {children}
      </body>
    </html>
  );
}
