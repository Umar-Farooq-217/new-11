import React from 'react';
import Header from '../(components)/header/header'
import Footer from '../(components)/footer/footer';
import Digital from '../(components)/digital/digital';
import '../globals.css'
const Page = () => {
    return (
        <div>
       <p className='text-center good '>
             <Header services='Pages'/>
            </p>

            <div className='bg-blue-100 sm:w-full h-auto'>
  <div  className='grid lg:grid-cols-3  md:grid-cols-3 sm:grid-cols-1 pb-10 gap-0 my-32  mx-28'>
    <Digital  src='/img/earth.webp' title='Smart planing' />
    <Digital src='/img/earth.webp' title='Our partnership ' />
    <Digital src='/img/earth.webp' title='Smart Ideas' />
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
