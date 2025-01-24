
import Footer from "@/_components/Footer";
import Header from "@/_components/Header";
import MortgageCalculator from "@/_components/MortgageCalculator";


const canonicalUrl = `https://gyanimeter.co.in/calculator/emi-calculator`;

export const metadata = {
  title: 'Mortgage Calculator - Calculate EMI on Home, Car & Personal Loan | Gyanimeter',
  description: 'Mortgage Calculator - Calculate your Equated Monthly Installment (EMI) for home loan, car loan, and personal loan online in simple steps using Mortgage Calculator at Gyanimeter.',
  keywords:'Calculate,SIP Calculator,SIP returns,Investments,Mortgage Calculator ',
  openGraph: {
    title: 'Mortgage Calculator',
  },
  alternates: {
    canonical: canonicalUrl,
  },
}


export default function page() {
  return (
    <>
    <Header/>
    <MortgageCalculator/>
    <Footer/>
    </>
  );
}
