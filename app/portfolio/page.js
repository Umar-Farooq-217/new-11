import React from 'react';
import Header from '../(components)/header/header'
import OurPortfolio from '../(components)/ourPorfolio/ourPortfolio';
import Footer from '../(components)/footer/footer';
import PricingCard  from '../(components)/pricingCard/pricingCard';
const Page = () => {
    return (
        <div>
        <p className=' text-center '>
             <Header services='Portfolio'/>
            </p>

            <div className='mt-16'>
  <p className='text-blue-300 font-semibold text-[12px] space-x-3 mx-28'>OUR PORTFOLIO</p>
  <p className='text-2xl font-semibold mx-28 pt-2'>Take A Look AT Our Latest Work</p>
<div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-7 mx-28 mt-7'>
  <OurPortfolio/>
  <OurPortfolio title='Web Development' />
  <OurPortfolio/>
  <OurPortfolio/>
  <OurPortfolio/>
  <OurPortfolio/>
</div>
</div>

<div>
  <h1 className='text-blue-400 tracking-wider pt-8 ml-28'>OUR PRICING</h1>
  <h1 className='font-semibold text-2xl ml-28'>CHOOSE A PLAN THAT'S RIGHT FOR YOU</h1>
  <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 mx-28 gap-5'>
    <PricingCard title='Basic Plan' src='/img/earth.webp' price='$50' style={{display:'flex' , margin:'auto'}} />
    <PricingCard title='Standard Plan' src='/img/earth.webp' price='$99' />
    <PricingCard title='Premium Plan' src='/img/earth.webp' price='$150' />
  </div>
</div>

<div className='bg-blue-50 mt-20'>
    <Footer/>
    <p className='h-[2px] bg-blue-400 mt-24'></p>
    <p className='text-gray-500 text-[12px] my-5  flex justify-center'>@ Copyright 2020 <span className='text-blue-400 relative bottom-10 mx-2'>Brandoxide</span> .All Rights reserved</p>
  </div>
   </div>
        
    );
}

export default Page;
