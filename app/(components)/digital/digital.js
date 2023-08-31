import React from 'react';
import Image from 'next/image';
import '../../globals.css'
const Digital = (props) => {
    return (
        <div style={props.style} className='bg-blue-100 mt-10 thirdContainer hover:scale-[1.1]  '>
            <Image src={props.src} height="200" width="200" st className='object-cover w-32 flex mx-auto mt-5 text-center h-32 rounded-full ' />
            <h3 className='text-center mt-2 font-semibold'>{props.title}</h3>
            <p className='text-center mt-5 mb-7 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores earum nemo doloremque  numquam amet  autem?</p>
        </div>
    );
}

export default Digital;
