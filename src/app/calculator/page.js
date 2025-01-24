
import Footer from "@/_components/Footer";
import Header from "@/_components/Header";
import { FaHandHoldingUsd,FaWallet,FaMoneyCheck } from "react-icons/fa";


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
        <h1 className="text-3xl font-bold mb-6 bg-[#E8EBFA] text-[#2A394E] p-4 font-[600] ">
         <span className="flex gap-2"> <FaHandHoldingUsd/> Investment and Returns</span>
        </h1>
        {/* <p>The SIP calculator helps estimate the potential growth of your Systematic Investment Plan (SIP) investment over your chosen time frame. 
        SIP is a convenient method to save for your long-term financial goals.</p> */}
        <div className='grid grid-cols-12 gap-4 mt-4  mb-6'>
            <div className="col-span-3 border border-gray-300 p-3 rounded-lg bg-[#2563eb05]">
                <a href="/calculator/sip-calculator">
                    <h2 className="text-2xl font-semibold pb-2">SIP Calculator</h2>
                    <p className="text-md text-gray-500">
                        The SIP calculator helps estimate the 
                        potential growth of your Systematic Investment 
                        Plan (SIP) investment over your chosen time frame.
                    </p>
                </a>
            </div>

            {/* <div className="col-span-3 border border-gray-300 p-3 rounded-lg bg-[#2563eb05]">
                <a href="">
                    <h2 className="text-2xl font-semibold pb-2">FD Calculator</h2>
                    <p className="text-md text-gray-500">
                        The FD calculator helps estimate the 
                        potential growth of your FD 
                        Plan (FD) investment over your chosen time frame.
                    </p>
                </a>
            </div>

            <div className="col-span-3 border border-gray-300 p-3 rounded-lg bg-[#2563eb05]">
                <a href="">
                    <h2 className="text-2xl font-semibold pb-2">RD Calculator</h2>
                    <p className="text-md text-gray-500">
                        The FD calculator helps estimate the 
                        potential growth of your FD 
                        Plan (FD) investment over your chosen time frame.
                    </p>
                </a>
            </div>
            <div className="col-span-3 border border-gray-300 p-3 rounded-lg bg-[#2563eb05]">
                <a href="">
                    <h2 className="text-2xl font-semibold pb-2">Mutual Fund Calculator</h2>
                    <p className="text-md text-gray-500">
                        The FD calculator helps estimate the 
                        potential growth of your FD 
                        Plan (FD) investment over your chosen time frame.
                    </p>
                </a>
            </div> */}

            
        </div>

        <h1 className="text-3xl font-bold mb-6 bg-[#E8EBFA] text-[#2A394E] p-4 font-[600] ">
        <span className="flex gap-2"><FaMoneyCheck/>Financial Planning</span>
        </h1>

        <div className='grid grid-cols-12 gap-4 mt-4  mb-6'>

            <div className="col-span-3 border border-gray-300 p-3 rounded-lg bg-[#2563eb05]">
                <a href="/calculator/emi-calculator">
                    <h2 className="text-2xl font-semibold pb-2">EMI Calculator</h2>
                    <p className="text-md text-gray-500">
                        EMI Calculator is a tool that helps users calculate 
                        the Equated Monthly Installment (EMI) for loans,
                        such as home loans, car loans, or personal loans.
                    </p>
                </a>
            </div>

            <div className="col-span-3 border border-gray-300 p-3 rounded-lg bg-[#2563eb05]">
                <a href="/calculator/mortgage-calculator">
                    <h2 className="text-2xl font-semibold pb-2">Mortgage Calculator</h2>
                    <p className="text-md text-gray-500">
                        A Mortgage Calculator is one of the most sought-after tools, 
                        especially for individuals planning to buy property, 
                        refinance loans, or estimate their monthly payments. 
                    </p>
                </a>
            </div>

            {/* <div className="col-span-3 border border-gray-300 p-3 rounded-lg bg-[#2563eb05]">
                <a href="">
                    <h2 className="text-2xl font-semibold pb-2">Home Affordibility</h2>
                    <p className="text-md text-gray-500">
                        EMI Calculator is a tool that helps users calculate 
                        the Equated Monthly Installment (EMI) for loans,
                        such as home loans, car loans, or personal loans.
                    </p>
                </a>
            </div>

            <div className="col-span-3 border border-gray-300 p-3 rounded-lg bg-[#2563eb05]">
                <a href="">
                    <h2 className="text-2xl font-semibold pb-2">Rental Yield</h2>
                    <p className="text-md text-gray-500">
                        EMI Calculator is a tool that helps users calculate 
                        the Equated Monthly Installment (EMI) for loans,
                        such as home loans, car loans, or personal loans.
                    </p>
                </a>
            </div> */}

        </div>

        {/* <h1 className="text-3xl font-bold mb-6 bg-[#E8EBFA] text-[#2A394E] p-4 font-[600] ">
         <span className="flex gap-2"><FaWallet/> Retirement Savings</span>
        </h1>

        <div className='grid grid-cols-12 gap-4 mt-4  mb-6'>

            <div className="col-span-3 border border-gray-300 p-3 rounded-lg bg-[#2563eb05]">
                <a href="">
                    <h2 className="text-2xl font-semibold pb-2">NPS Calculator</h2>
                    <p className="text-md text-gray-500">
                        EMI Calculator is a tool that helps users calculate 
                        the Equated Monthly Installment (EMI) for loans,
                        such as home loans, car loans, or personal loans.
                    </p>
                </a>
            </div>

            <div className="col-span-3 border border-gray-300 p-3 rounded-lg bg-[#2563eb05]">
                <a href="">
                    <h2 className="text-2xl font-semibold pb-2">PPF Calculator</h2>
                    <p className="text-md text-gray-500">
                        EMI Calculator is a tool that helps users calculate 
                        the Equated Monthly Installment (EMI) for loans,
                        such as home loans, car loans, or personal loans.
                    </p>
                </a>
            </div>

            <div className="col-span-3 border border-gray-300 p-3 rounded-lg bg-[#2563eb05]">
                <a href="">
                    <h2 className="text-2xl font-semibold pb-2">APY Calculator</h2>
                    <p className="text-md text-gray-500">
                        EMI Calculator is a tool that helps users calculate 
                        the Equated Monthly Installment (EMI) for loans,
                        such as home loans, car loans, or personal loans.
                    </p>
                </a>
            </div>

            <div className="col-span-3 border border-gray-300 p-3 rounded-lg bg-[#2563eb05]">
                <a href="">
                    <h2 className="text-2xl font-semibold pb-2">EPF Calculator</h2>
                    <p className="text-md text-gray-500">
                        EMI Calculator is a tool that helps users calculate 
                        the Equated Monthly Installment (EMI) for loans,
                        such as home loans, car loans, or personal loans.
                    </p>
                </a>
            </div>
            
        </div> */}

    </main>
    <Footer/>
    </>
  );
}
