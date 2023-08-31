import React from 'react';
import Image from 'next/image';
import Button from '../../(components)/btn/btn'
const PricingCard = (props) => {
    return (
        <div className="bg-white border-[5px solid black] shadow-2xl mt-10 hover:bg-blue-400 hover:text-white">
            <h1 className='text-black font-bold text-center pt-7 '>{props.title}</h1>
            <Image className='w-28 h-28 flex mx-auto rounded-[80px] mt-7' src={props.src} width='100' height='100'/> 
           <div className='flex mt-5 justify-center hover:bg-blue-400 hover:text-white'><p className='text-blue-800 text-xl'>{props.price}</p><p className='text-[12px] font-bold relative top-2'>/MONTH</p></div>
            <p className='text-[15px] text-center'>Graphic design</p>
            <p className='text-[15px] text-center'>Web design</p>
            <p className='text-[15px] text-center'>UI/UX</p>
            <p className='text-[15px] text-center'>HTML/CSS</p>
            <p className='text-[15px] text-center'>SEO MARKETING</p>
            <p className='text-[15px] text-center'>Business Analysis</p>
            <p className='text-center mb-5'><Button title='Start Now' /></p>
        </div>
    );
}

export default PricingCard;
