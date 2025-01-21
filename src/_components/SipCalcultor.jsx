"use client"

import { useEffect, useState } from "react";
import { FaCalculator } from "react-icons/fa";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import DonutChart from "./DoughnutChart";


export default function SipCalcultor(){

  const [inputWith,setInputWith] = useState(80)
  const [inputAmountValue,setAmountValue] = useState('5000')
  const [sliderProps, setSliderProps] = useState([1,5]);
  const [sliderPercentProps, setsliderPercentProps] = useState([8,12]);
  const [totalSipAmount,setTotalSipAmount] = useState(0)
  const [investAmount,setInvestAmount] = useState(0)
  const [returnAmount,setReturnAmount] = useState(0)
  
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

  const handleInputWith =(event)=> {
    console.log(inputWith)
    const {name,value} = event.target
    const rawValue = event.target.value.replace(/,/g, ""); // Remove commas
    if (/^\d*$/.test(rawValue)) { // Allow only digits
      setAmountValue(rawValue); // Update state with raw value
    }
    const lengthInput  = value.length
    console.log(lengthInput)
    const claCulateInputWith = (15*lengthInput+6)
    console.log(claCulateInputWith)
    setInputWith(claCulateInputWith)
  }

  const formatWithCommas = (number) => {
    if (!number) return "";
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const chartData = {
    data : {
      labels: ['Est. Returns : ', 'Invested Amount : '],
      datasets: [
        {
          label: '',
          data: [investAmount, returnAmount],
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
    const AnnualRate = (sliderPercentProps[1]/(12*100))
    const TotalPeriods = sliderProps[1]*12

    const calculateMathPow = Math.pow((1+AnnualRate),TotalPeriods)
    const calculateMathPowSubs = calculateMathPow-1
    const calculateMathPowDiv= calculateMathPowSubs/AnnualRate

    const sipCalculate= Math.ceil((inputAmountValue*calculateMathPowDiv*(1+AnnualRate)))
    setTotalSipAmount(sipCalculate)

    const TotalInvestAmount = inputAmountValue*TotalPeriods
    const TotalReturnAmount = sipCalculate-TotalInvestAmount
    setInvestAmount(TotalInvestAmount)
    setReturnAmount(TotalReturnAmount)
  
  },[inputAmountValue,sliderProps,sliderPercentProps])


  console.log(chartData)


  return(
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">SIP Calculator</h1>
      <p>The SIP calculator helps estimate the potential growth of your Systematic Investment Plan (SIP) investment over your chosen time frame. 
      SIP is a convenient method to save for your long-term financial goals.</p>

      <div className='grid grid-cols-12 gap-4 border-spacing-1 border border-gray-300 rounded-lg mt-5 divide-x mb-6'>
        <div className='col-span-5 p-5'>
          <div className='grid grid-cols-12 gap-4'>
              <div className='col-span-2'>
                <div className="flex justify-between bg-slate-300 items-cente w-12 h-12 p-3 rounded-full self-center">
                  <FaCalculator className='text-blue-500 text-2xl font-light'/>
                </div>
              </div>
              <div className='col-span-10'>
                <strong>Returns Estimator</strong>
                <p>Estimation is based on the past performance</p>
              </div>
          </div>

          <div className='w-full pt-3'>
              <div className='border-2 border-blue-500 rounded-lg items-center text-center p-3'>
                <h4 className="text-sm pb-1">ENTER AMOUNT</h4>
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
                      value={formatWithCommas(inputAmountValue)}
                    />
                  </span>
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
                    className='mb-2'
                    id='range-slider'
                    {...sliderProps}
                    onInput={handleSliderChange}
                    min={1}
                    max={30}
                    value={sliderProps}
                    thumbsDisabled={[true, false]}
                    rangeSlideDisabled={true}
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
                    className='mb-2'
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

        </div>
        <div className='col-span-7 p-5'>
          <div className="text-center mb-5">
            <p className="text-md pb-1">The total value of your investment after <b>{sliderProps[1]} Years</b>  will be</p>
            <h1 className="text-4xl pb-1 font-extrabold">₹ {totalSipAmount.toLocaleString('en-IN')}</h1>
          </div>
          
          <div className="flex items-center justify-around">
            <div className='w-4/12'>
                <DonutChart chartData={chartData} />
            </div>
            <div className=''>
                <div className='border-l-8 border-[#f57328] mb-2'>
                    <p className="px-2">Invested Amount</p>
                    <p className="px-2 font-semibold text-2xl">₹ {investAmount.toLocaleString('en-IN')} </p>
                </div>
                <div className='border-l-8 border-[#2563eb]'>
                  <p className="px-2">Est. Returns</p>
                  <p className="px-2 font-semibold text-2xl">₹ {returnAmount.toLocaleString('en-IN')}</p>
                </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mb-3">
        <h2 className="text-2xl font-semibold mb-3">What is an SIP Calculator?</h2>
        <p>An SIP Calculator is a financial tool that helps investors estimate the future value of their investments made through a Systematic Investment Plan (SIP). 
          It provides a clear picture of how small, regular investments over time can grow due to the power of compounding and consistent contributions.</p>
      </div>

      <div className="mb-3">
        <h2 className="text-2xl font-semibold mb-3">Purpose of an SIP Calculator</h2>
        <p>1 .<b> Predict Future Returns</b>: Calculate the estimated maturity amount based on a given investment amount, duration, and expected rate of return.</p>
        <p>2 .<b> Plan Investments </b>: Helps investors determine how much they need to invest regularly to achieve their financial goals.</p>
        <p>3 .<b> Compare Scenarios </b>: Evaluate different rates of return, investment amounts, and durations to make informed decisions.</p>
      </div>

      <div className="mb-3">
        <h2 className="text-2xl font-semibold mb-3">How Are SIP Investment Returns Calculated?</h2>
        <p>The SIP returns are calculated by entering the variable numbers mentioned above into the Systematic Investment Plan calculator. </p>
        <p>The SIP calculator formula used is,</p>
        <b>A = P × ((([1 + r]^n) – 1) / r) × (1 + r)</b>
        <p>Where,</p>
        <p>A- Estimated Returns from the SIP</p>
        <p>P - Amount you invest in SIP</p>
        <p>r - Rate of Return you are expecting to get</p>
        <p>n - Number of total SIPs made</p>
      </div>

      <div className="mb-3">
        <h2 className="text-2xl font-semibold mb-3">Inputs Required in an SIP Calculator</h2>
        <p>1 .<b> Monthly Investment Amount (SIP amount)</b>: The fixed amount invested every month.</p>
        <p>2 .<b> Investment Period </b>: The total duration of the SIP in months or years.</p>
        <p>3 .<b> Expected Rate of Return </b>: The annual rate of return on the investment, expressed as a percentage.</p>
      </div>

      <div className="mb-3">
        <h2 className="text-2xl font-semibold mb-3">Benefits of Using an SIP Calculator</h2>
        <p>1 .<b> Simplicity</b>: Quick and easy to use without requiring complex financial calculations.</p>
        <p>2 .<b> Accuracy </b>: Eliminates the risk of manual errors in estimating future value.</p>
        <p>3 .<b> Clarity </b>: Offers a detailed breakdown of how your investment grows over time.</p>
        <p>4 .<b> Decision-Making </b>: Helps in setting realistic financial goals and deciding on the appropriate investment amount.</p>
      </div>
      
      </main>
  )
}