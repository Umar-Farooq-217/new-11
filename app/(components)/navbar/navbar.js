

'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../../globals.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='flex justify-between ulul items-center pt-5 mx-28   ghost relative'>
            <h1 className='text-white font-semibold logo hover:text-red-500 text-xl'>LOGO.</h1>
            <div onClick={() => setOpen(!open)} className='w-5 font-bold cursor-pointer absolute top-6 right-2 sm:mr-28 bar '>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <ul className={`text-white flex justify-center thgh   ulul font-semibold ${open ? 'open' : 'closed'}`}>
                <li className='mx-3 home hover:text-red-500  item text-[12px] pl-10 '><Link href='/'>Home</Link></li>
                <li className='mx-3 hover:text-red-500 item text-[12px]'><Link href='/about'>About</Link></li>
                <li className='mx-3 hover:text-red-500 item text-[12px]'><Link href='/pages'>Pages</Link></li>
                <li className='mx-3 hover:text-red-500 item text-[12px]'><Link href='/services'>Services</Link></li>
                <li className='mx-3 hover:text-red-500 item text-[12px]'><Link href='/portfolio'>Portfolio</Link></li>
                <li className='mx-3 hover:text-red-500 item text-[12px]'><Link href='/blog'>Blog</Link></li>
                <li className='mx-3 hover:text-red-500 item text-[12px] pr-28'><Link href='/contact'>Contact</Link></li>
                <button id='btn' className='bg-white item flex hover:text-red-500 justify-between rounded-2xl w-28 hover:scale-[1.2]'>
                    <strong className='font-thick text-[14px] text-blue-400 flex justify-start ml-2 '>Search</strong> <FontAwesomeIcon className='text-blue-400  mt-[3px] mr-[12px] ' icon={faSearch} /> 
                </button>
            </ul>
        </div>

    );
}

export default Navbar;
