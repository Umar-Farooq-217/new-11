import React from 'react';
import Header from '../(components)/header/header'
import Footer from '../(components)/footer/footer';
import OurBlog from '../(components)/ourBlog/ourBlog';
import TeamCard from '../(components)/team/teamCard';
const Page = () => {
    return (
        <div>
          <p className='text-center '>
             <Header services='Our Blog'/>
            </p> 
<div>

            <OurBlog/>
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


            <div className='bg-blue-50 mt-20'>
    <Footer/>
    <p className='h-[2px] bg-blue-400 mt-24'></p>
    <p className='text-gray-500 text-[12px] my-5  flex justify-center'>@ Copyright 2020 <span className='text-blue-400 relative bottom-10 mx-2'>Brandoxide</span> .All Rights reserved</p>
  </div>
        </div>
    );
}

export default Page;
