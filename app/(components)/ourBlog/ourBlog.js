import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight  } from "@fortawesome/free-solid-svg-icons";
import '../../globals.css'
import BlogCard from '../blogCard/blogCard'
const OurBlog = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 sm:grid-cols-1 mx-28 mt-28'>
            <div>
                <h1 className='text-blue-400 mt-24 tracking-widest'>OUR BLOG</h1>
                <p className='text-2xl  font-bold'>Latest News and Blog</p>
                <p className='text-[12px] mt-7'>Lorem ipsum dolor, sit amet consectetur adipisicing s! Nt porro laborum  amet.</p>
                 
                <div className='flex mt-5 text-[12px] h-[25px]'>
                     <input type="email" className='bloginput pl-5' placeholder='Enter Your Email' /> <FontAwesomeIcon icon={faArrowRight} className='w-8 h-[25px] bg-[rgba(75,142,219,255)] text-white text-[12px] font-thin cursor-pointer' />
                    </div>

            </div>
                    <div>
                        <BlogCard/>
                    </div>
                    <div>
                        <BlogCard/>
                    </div>
        </div>
    );
}

export default OurBlog;
