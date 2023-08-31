import Image from 'next/image'
import './globals.css'
import Header from './(components)/header/header'
import DigitalServices from './(components)/digital-services/digital-services'
import AboutDigital from './(components)/aboutDigital/aboutDigital'
import Digital from './(components)/digital/digital'
import OurPortfolio from './(components)/ourPorfolio/ourPortfolio'
import TeamCard from './(components)/team/teamCard'
import PricingCard from './(components)/pricingCard/pricingCard'
import ClientCard from './(components)/clientCard/clientCard'
import OurBlog from './(components)/ourBlog/ourBlog'
import Footer from './(components)/footer/footer'
import Btn from './(components)/btn/btn'
export default function Home() {
  return (
<div className=''>

  <div>
    <Header services='Creative ' agency='Digital Agency' pera='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt' para='eveniet  recusandae accusamus illum  ' butt={<Btn title='Read More'/>} />
  </div>

  <div>
    <DigitalServices/>
  </div>

  <AboutDigital/>

<div className='bg-blue-100 sm:w-full h-auto'>
  <div  className='grid lg:grid-cols-3  md:grid-cols-3 sm:grid-cols-1 pb-10 gap-0 my-32  mx-28'>
    <Digital  src='/img/earth.webp' title='Smart planing' />
    <Digital src='/img/earth.webp' title='Our partnership ' />
    <Digital src='/img/earth.webp' title='Smart Ideas' />
  </div>
</div>
<div>
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

<div className='bg-blue-50 mt-36 min-h-[480px]'>
  <h1 className='tracking-wider font-semibold pt-10 text-blue-400 text-center'>OUR TEAM</h1>
  <h1 className='text-3xl text-center pt-2 font-bold'>Our Top dedicated professionals</h1>
<div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-10 mx-28 pt-12'>
<div className='hover:bg-indigo-200 text-white'>
  <TeamCard title='Umar Farooq' />
  <p className='text-[12px] text-gray-400 bg-white  h-5 font-bold text-center'>SHIEF STAFF</p>
  </div>
  <div>

<TeamCard title='Asif' />
<p className='text-[12px]  text-gray-400 bg-white   h-5 font-bold text-center'>FOUNDER & MANAGER </p>
  </div>
  <div>

<TeamCard title='Ramzan' /><p className='text-[12px]  text-gray-400 bg-white   h-5 font-bold text-center'>
  WEB DESIGNER
</p>
  </div>

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

<div className='bg-[rgba(75,142,219,255)] min-h-[520px] mt-16'>
  <p className='text-white text-3xl text-center font-semibold pt-24'>We're Trusted by Clients</p>
  <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mx-28 gap-5 mt-10 '>
<ClientCard src='/img/earth.webp' heading='Mina Whatston' title='Consultant' />
<ClientCard src='/img/earth.webp' heading='Edward Hunter' title='IT Specialist' />
  </div>
</div>


<div>
<OurBlog/>
</div>
  
  <div className='bg-blue-50 mt-20'>
    <Footer/>
    <p className='h-[2px] bg-blue-400 mt-24'></p>
    <p className='text-gray-500 text-[12px] my-5  flex justify-center'>@ Copyright 2020 <span className='text-blue-400 relative bottom-10 mx-2'>Brandoxide</span> .All Rights reserved</p>
  </div>
   </div>
  
  )
}

