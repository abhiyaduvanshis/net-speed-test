"use client"

import { useEffect, useState } from "react";
import { FaCalculator } from "react-icons/fa";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import DonutChart from "./DoughnutChart";

export default function MortgageCalculator(){

    const [inputWith,setInputWith] = useState(150)
    const [inputAmountValue,setAmountValue] = useState(2500000)
    const [sliderProps, setSliderProps] = useState([0,5]);
    const [sliderPercentProps, setsliderPercentProps] = useState([0,10]);
    const [totalEmiAmount,settotalEmiAmount] = useState(0)
    const [intrestAmount,setintrestAmount] = useState(0)
    const [principalAmount,setprincipalAmount] = useState(0)
    const [payableAmount,setpayableAmount] = useState(0)


    const handleInputWith =(event)=> {

        const {name,value} = event.target
        const rawValue =Number(event.target.value.replace(/,/g, ""))
        console.log(rawValue)
        setAmountValue(rawValue)
        const lengthInput  = value.length
        const claCulateInputWith = (15*lengthInput+6)
        console.log(claCulateInputWith)
        setInputWith(claCulateInputWith)
    }

    const handleSliderChange = (newValue) => {
        setSliderProps(newValue)
    };
    
    const handleSliderChangeYear = (e) => {
        const updateValue = Number(e.target.value)
        if(updateValue>30){
          setSliderProps([1,30])
        }else{
          setSliderProps([1,updateValue])
        }
    }
    
    const handlePercentSliderChange = (newValue) => {
        setsliderPercentProps(newValue)
    };
    
    const handlePercentInputChange = (e) => {
        const updateValue = Number(e.target.value)
        if(updateValue>30){
          setsliderPercentProps([1,30])
        }else{
          setsliderPercentProps([1,updateValue])
        }
    }

    const chartData = {
        data : {
          labels: ['Est. Returns : ', 'Invested Amount : '],
          datasets: [
            {
              label: '',
              data: [intrestAmount, principalAmount],
              backgroundColor: [
                '#f57328',
                '#2563eb',
              ],
              borderColor: [
                '#f57328',
                '#2563eb',
              ],
              borderWidth: 1,
            },
          ],
        },
        options : {
          responsive: true,
          plugins: {
            legend: {
              display: false// Can be 'top', 'left', 'right', 'bottom'
            },
            tooltip: {
              enabled: true,
            },
          },
          cutout: '50%', // Controls the size of the donut hole
        }
    }

    useEffect(()=>{
        const loanAmount = inputAmountValue
        const mothlyIntrestRate = (sliderPercentProps[1]/12)/100
        const loanTenurMoth = sliderProps[1]*12
        const rateCalculateAdd = Math.pow((1+mothlyIntrestRate),loanTenurMoth)
        const emiFormulaCalculate= (loanAmount*mothlyIntrestRate*rateCalculateAdd)/(rateCalculateAdd-1)
        settotalEmiAmount(Math.ceil(emiFormulaCalculate))
        setprincipalAmount(Math.ceil(loanAmount))
        setpayableAmount(Math.ceil(emiFormulaCalculate*loanTenurMoth))
        setintrestAmount(Math.ceil((emiFormulaCalculate*loanTenurMoth)-loanAmount))
    },[inputAmountValue,sliderProps,sliderPercentProps])




    return(
        <main className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-6">Mortgage Calculator</h1>
            <p>Calculate Your Mortgage Loan EMI Online</p>

            <div className='grid grid-cols-12 gap-4 border-spacing-1 border border-gray-300 rounded-lg mt-5 divide-x mb-6'>
                <div className='xl:col-span-5 p-5  col-span-11'>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-2'>
                            <div className="flex justify-between bg-slate-300 items-cente w-12 h-12 p-3 rounded-full self-center">
                            <FaCalculator className='text-blue-500 text-2xl font-light'/>
                            </div>
                        </div>
                        <div className='col-span-10'>
                            <strong>EMI Estimator</strong>
                            <p>Estimation is based on the loan amount</p>
                        </div>
                    </div>

                    <div className='w-full pt-3'>
                        <div className='border-2 border-blue-500 rounded-lg items-center text-center p-3'>
                            <h4 className="text-sm pb-1">Loan Amount</h4>
                            <span className="text-sm">
                                <span className="">₹ </span>
                                <input 
                                className="
                                text-3xl font-semibold
                                border-blue-500 
                                text-2xl
                                focus:outline-none 
                                w-auto" 
                                type="text" 
                                style={{width:inputWith+'px'}}
                                onChange={handleInputWith}
                                value={inputAmountValue.toLocaleString('en-IN')}
                                />
                            </span>
                        </div>
                    </div>


                    <div className='w-full pt-5'>
                        <div className=''>
                            <div className='flex items-center pb-2'>
                                <div className="flex-1">
                                    <p>Expected Rate of Return</p>
                                </div>
                                <div className="flex-none border-b border-gray-300 ">
                                    <input 
                                    className="focus:outline-none w-16 text-3xl font-semibold text-center" 
                                    value={sliderPercentProps[1]} 
                                    onChange={handlePercentInputChange} 
                                    max={30}/> 
                                    <span className="text-sm">%</span>
                                </div>
                            </div>
                            <RangeSlider
                                className='single-thumb mb-2'
                                id='range-slider'
                                {...sliderPercentProps}
                                onInput={handlePercentSliderChange}
                                min={8}
                                max={30}
                                step={0.1}
                                value={sliderPercentProps}
                                thumbsDisabled={[true, false]}
                                rangeSlideDisabled={true}
                            />
                            <div className='flex'>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-400">8 %</p>
                                </div>
                                <div className="flex-1 text-end">
                                    <p className="text-sm text-gray-400">30 %</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='w-full pt-3'>
                        <div className=''>
                            <div className='flex items-center pb-2'>
                                <div className="flex-1">
                                    <p>Select Duration</p>
                                </div>
                                <div className="flex-none border-b border-gray-300 ">
                                    <input 
                                    className="focus:outline-none w-9 text-3xl font-semibold text-center" 
                                    value={sliderProps[1]} 
                                    onChange={handleSliderChangeYear} 
                                    max={30}/> 
                                    <span className="text-sm ">Yrs</span>
                                </div>
                            </div>

                            <RangeSlider
                                className='single-thumb mb-2'
                                id='range-slider'
                                {...sliderProps}
                                onInput={handleSliderChange}
                                min={1}
                                max={30}
                                value={sliderProps}
                                thumbsDisabled={[true, false]}
                                rangeSlideDisabled={true}
                                thumbs={1}
                            />
                            
                            <div className='flex'>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-400">1 Yrs</p>
                                </div>
                                <div className="flex-1 text-end">
                                    <p className="text-sm text-gray-400">30 Yrs</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='xl:col-span-7 p-5 col-span-12'>
                    <div className="text-center mb-5">
                        <p className="text-md pb-1">EMI</p>
                        <h1 className="text-4xl pb-1 font-extrabold">₹ {totalEmiAmount.toLocaleString('en-IN')}</h1>
                    </div>
                    
                    <div className="xl:flex items-center justify-around">
                        <div className='xl:w-4/12'>
                            <DonutChart chartData={chartData} />
                        </div>
                        <div className=''>
                            <div className='border-l-8 border-[#f57328] mb-2'>
                                <p className="px-2">Principal Amount</p>
                                <p className="px-2 font-semibold text-2xl">₹ {principalAmount.toLocaleString('en-IN')} </p>
                            </div>
                            <div className='border-l-8 border-[#2563eb] mb-2'>
                            <p className="px-2">Interest</p>
                            <p className="px-2 font-semibold text-2xl">₹ {intrestAmount.toLocaleString('en-IN')}</p>
                            </div>

                            <div className='border-l-8 border-gray-300'>
                            <p className="px-2">Total Payable</p>
                            <p className="px-2 font-semibold text-2xl">₹ {payableAmount.toLocaleString('en-IN')}</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            

            <div className="mb-3">
                <h2 className="text-2xl font-semibold mb-3">Purpose of a Mortgage Calculator</h2>
                <p>1. To estimate monthly mortgage payments.</p>
                <p>2. To determine how different factors like loan amount, interest rate, loan term, and down payment affect the cost of a mortgage.</p>
                <p>3. To provide a breakdown of payments, including principal, interest, taxes, and insurance (PITI).</p>
                <p>4. To help users understand the total cost of the loan, including interest over the entire loan term.</p>
            </div>

            <div className="mb-3">
                <h2 className="text-2xl font-semibold mb-3">Key Inputs for a Mortgage Calculator</h2>
                <p>1. Loan Amount: The total amount borrowed (home price minus down payment).</p>
                <p>2. Interest Rate: The annual interest rate charged by the lender.</p>
                <p>3. Loan Term: The repayment period (e.g., 15, 20, or 30 years).</p>
                <p>4. Down Payment: The initial amount paid upfront, typically expressed as a percentage of the home price.</p>
                <p>5. Property Taxes (optional): Annual property tax amounts.</p>
                <p>6. Homeowner’s Insurance (optional): Insurance costs to protect the property.</p>
                <p>7. PMI (Private Mortgage Insurance) (optional): For loans with low down payments, lenders may require PMI.</p>
            </div>

            <div className="mb-3">
                <h2 className="text-2xl font-semibold mb-3">Mortgage Calculator Formula</h2>
                <p>Here's the formula to calculate EMI:</p>
                <b>E = [P x R x (1+R) ^N] / [(1+R) ^ (N-1)]</b>
                <p>Where,</p>
                <p>E = EMI</p>
                <p>P = Principal Amount</p>
                <p>R = Rate of interest. This is calculated on a monthly basis. If the interest rate is 4% per annum then R will be 4/12/100 = 0.0033.</p>
                <p>N = Duration in months</p>
            </div>

            <div className="mb-3">
                <h2 className="text-2xl font-semibold mb-3">Example of Mortgage Calculation</h2>
                <p>Let’s say you borrow ₹10,00,000 at an annual interest rate of 10% for 5 years:</p>
                <p>Loan Amount (P): ₹10,00,000</p>
                <p>Annual Interest Rate: 10%</p>
                <p>Monthly interest rate R=10/12/100=0.00833</p>
                <p>Loan Tenure (N):5×12=60 months</p>
                <b>E = [1000000 x 0.00833 x (1+0.00833)^60] /((1+0.00833)^60)-1</b>
                <p>The EMI would be approximately ₹21,247.96 per month.</p>
            </div>

            <div className="mb-3">
                <h2 className="text-2xl font-semibold mb-3">How It Helps</h2>
                <p>An Mortgage Calculator is an essential financial tool that simplifies loan repayment planning, 
                    ensures better budgeting, and makes it easier for borrowers to evaluate loan offers.</p>
            </div>


        </main>
    )
}

