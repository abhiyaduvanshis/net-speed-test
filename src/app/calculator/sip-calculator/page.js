
import Footer from "@/_components/Footer";
import Header from "@/_components/Header";
import SipCalcultor from "@/_components/SipCalcultor";

const canonicalUrl = `https://gyanimeter.co.in/calculator/sip-calculator`;

export const metadata = {
  title: 'SIP Calculator - Calculate Returns on SIP Plan Calculator Online',
  description: 'Calculate your SIP returns effortlessly with our mutual fund SIP calculator. Plan and optimize your investments for financial success. Start SIP investment with Gyanimeter.',
  keywords:'Calculate,SIP Calculator,SIP returns,Investments ',
  openGraph: {
    title: 'Blog',
  },
  alternates: {
    canonical: canonicalUrl,
  },
}


export default function Home() {
  return (
    <>
    <Header/>
    <SipCalcultor/>
    <Footer/>
    </>
  );
}
