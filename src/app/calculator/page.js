
import Footer from "@/_components/Footer";
import Header from "@/_components/Header";


const canonicalUrl = `https://gyanimeter.co.in/calculator`;

export const metadata = {
  title: 'EMI Calculator - Calculate EMI on Home, Car & Personal Loan | Gyanimeter',
  description: 'EMI Calculator - Calculate your Equated Monthly Installment (EMI) for home loan, car loan, and personal loan online in simple steps using EMI Calculator at Gyanimeter.',
  keywords:'Calculate,SIP Calculator,SIP returns,Investments,EMI Calculator ',
  openGraph: {
    title: 'EMI Calculator',
  },
  alternates: {
    canonical: canonicalUrl,
  },
}


export default function Home() {
  return (
    <>
    <Header/>
    <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Calculator</h1>
        {/* <p>The SIP calculator helps estimate the potential growth of your Systematic Investment Plan (SIP) investment over your chosen time frame. 
        SIP is a convenient method to save for your long-term financial goals.</p> */}
        <div className='grid grid-cols-12 gap-4 mt-4'>
            <div className="col-span-3 border border-gray-300 p-3 rounded-lg">
                <a href="/calculator/sip-calculator">
                    <h2 className="text-2xl font-semibold pb-2">SIP Calculator</h2>
                    <p className="text-md text-gray-500">
                        The SIP calculator helps estimate the 
                        potential growth of your Systematic Investment 
                        Plan (SIP) investment over your chosen time frame.
                    </p>
                </a>
            </div>
            <div className="col-span-3 border border-gray-300 p-3 rounded-lg">
                <a href="/calculator/emi-calculator">
                    <h2 className="text-2xl font-semibold pb-2">EMI Calculator</h2>
                    <p className="text-md text-gray-500">
                        EMI Calculator is a tool that helps users calculate 
                        the Equated Monthly Installment (EMI) for loans,
                        such as home loans, car loans, or personal loans.
                    </p>
                </a>
            </div>

            <div className="col-span-3 border border-gray-300 p-3 rounded-lg">
                <a href="/calculator/emi-calculator">
                    <h2 className="text-2xl font-semibold pb-2">Mortgage Calculator</h2>
                    <p className="text-md text-gray-500">
                        EMI Calculator is a tool that helps users calculate 
                        the Equated Monthly Installment (EMI) for loans,
                        such as home loans, car loans, or personal loans.
                    </p>
                </a>
            </div>

            <div className="col-span-3 border border-gray-300 p-3 rounded-lg">
                <a href="/calculator/emi-calculator">
                    <h2 className="text-2xl font-semibold pb-2">Home Affordibility</h2>
                    <p className="text-md text-gray-500">
                        EMI Calculator is a tool that helps users calculate 
                        the Equated Monthly Installment (EMI) for loans,
                        such as home loans, car loans, or personal loans.
                    </p>
                </a>
            </div>
            
        </div>
    </main>
    <Footer/>
    </>
  );
}
