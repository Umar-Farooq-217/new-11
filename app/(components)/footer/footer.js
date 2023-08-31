import React from 'react';

const Footer = () => {
    return (
        <div className='bg-blue-50 grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1 mx-28'>

        <div className='mt-20'>
            <h1 className='text-xl text-blue-400 font-semibold'>LOGO.</h1>
            <p className='text-[12px] mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, vero! Magni,nice  consequatur aliquid! Officia   maxime quisquam eaque quam voluptatibus? Voluptas.</p>
            <input className='text-2xl mx-1 mt-4'  type="radio" name='gren' />
            <input className='text-2xl mx-1 mt-4'  type="radio" name='gren' />
            <input className='text-2xl mx-1 mt-4'  type="radio" name='gren' />
        </div>
        <div className='text-center'>
            <h1 className='font-semibold text-lg mt-16'>OUR LINKS</h1>
            <p className='text-[12px] pt-3 hover:text-blue-500'>Home</p>
            <p className='text-[12px] pt-3 hover:text-blue-500'>About</p>
            <p className='text-[12px] pt-3 hover:text-blue-500'>Contact Us</p>
            <p className='text-[12px] pt-3 hover:text-blue-500'>Services</p>
            <p className='text-[12px] pt-3 hover:text-blue-500'>Blog</p>
        </div>

        <div className='text-center'>
            <h1 className='font-semibold text-lg mt-16'>OUR COMPANY</h1>
            <p className='text-[12px] pt-3 hover:text-blue-500'>About Company</p>
            <p className='text-[12px] pt-3 hover:text-blue-500'>Our Testimonials</p>
            <p className='text-[12px] pt-3 hover:text-blue-500'>Latest News</p>
            <p className='text-[12px] pt-3 hover:text-blue-500'>Our Mission</p>
            <p className='text-[12px] pt-3 hover:text-blue-500'>Get a free Quot</p>
           
        </div>

        <div className='text-center'>
            <h1 className='font-semibold text-lg mt-16'>OUR SERVICES</h1>
            <p className='text-[12px] pt-3 hover:text-blue-500'>App Development</p>
            <p className='text-[12px] pt-3 hover:text-blue-500'>Web Development</p>
            <p className='text-[12px] pt-3 hover:text-blue-500'>Graphic Design</p>
            <p className='text-[12px] pt-3 hover:text-blue-500'>Web solution</p>
            <p className='text-[12px] pt-3 hover:text-blue-500'>App Solution</p>
        </div>
            
        </div>
    );
}

export default Footer;
