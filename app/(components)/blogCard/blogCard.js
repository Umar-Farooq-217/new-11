
import React from 'react';
import Btn  from '../../(components)/btn/btn';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight  } from "@fortawesome/free-solid-svg-icons";
import '../../globals.css'
const BlogCard = () => {
    return (
        <div className='blg hover:text-white hover:bg-[rgba(75,142,219,255)]'>
            <h1 className='text-sm ml-4 mt-6 font-bold '>Lorem, ipsum dolor ley  sit amet adipisicing elit.</h1>
            <p className='text-lg ml-4 font-semibold mt-4'>Posted 7 March, 2020</p>
            <p className='text-[8px ] ml-4 mt-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. A cumque aspernatur vero adipisci, ex labore quam vel reiciendis dicta quae eaque maiores maxime voluptatem! Sed, esse quisquam.</p>
            
               <span className='flex justify-start hover:text-white ml-[72px] ' ><p className='text-lg hover:text-white text-blue-400 read'>Read More</p><FontAwesomeIcon  icon={faArrowRight} className='w-6 arrow    text-blue-400 h-[20px] hover:text-white' /></span> 
                </div> 
        
    );
}

export default BlogCard;
