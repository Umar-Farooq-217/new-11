import React from 'react';
import Header from '../(components)/header/header'
import Footer from '../(components)/footer/footer';
import ClientCard from '../(components)/clientCard/clientCard';
import Digital from '../(components)/digital/digital';
import ContactForm from '../(components)/contactForm/contactForm';
const Page = () => {
    return (
        <div>
        <p className='text-center '>
             <Header services='Our Contact'/>
            </p>


<div>
  <ContactForm/>
</div>
            
            <div className='bg-blue-100 sm:w-full h-auto'>
  <div  className='grid lg:grid-cols-3  md:grid-cols-3 sm:grid-cols-1 pb-10 gap-0 my-32  mx-28'>
    <Digital  src='/img/earth.webp' title='Smart planing' />
    <Digital src='/img/earth.webp' title='Our partnership ' />
    <Digital src='/img/earth.webp' title='Smart Ideas' />
  </div>
</div>


            <div className='bg-[rgba(75,142,219,255)] min-h-[520px] mt-16'>
  <p className='text-white text-3xl text-center font-semibold pt-24'>We're Trusted by Clients</p>
  <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mx-28 gap-5 mt-10 '>
<ClientCard src='/img/earth.webp' heading='Mina Whatston' title='Consultant' />
<ClientCard src='/img/earth.webp' heading='Edward Hunter' title='IT Specialist' />
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
