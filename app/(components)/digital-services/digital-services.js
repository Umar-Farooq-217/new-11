'use client'
import React from 'react';
import './digital-services.css'
import Digital from '../digital/digital';


const DigitalServices = () => {
    return (
        
        <div>
            <span className='text-blue-400 text-[12px] align-middle'>Our Services</span>
            <h3 className='text-2xl font-semibold text-center pt-3'>We are providing digital services</h3>

<div className='digital grid lg:grid-cols-3 md:grid-cols-3   sm:grid-cols-1 gap-5 mx-28'>
<Digital src="/img/python.jpg" title="Web development" />
<Digital src="/img/web.png" title='Graphic Design' />
<Digital src='/img/web.jfif' title='Python' />
</div>



        </div>
    );
}

export default DigitalServices;
