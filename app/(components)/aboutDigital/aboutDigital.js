import React from 'react';
import Image from 'next/image';
import Btn from '../../(components)/btn/btn'
const AboutDigital = () => {

    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-20  mx-28 mt-36'>
            <div>
                <Image src="/img/web.png"  width="100" height="100"  className='w-full h-full object-cover ' />
            </div>
            <div>
                <h6 className='text-blue-400 mt-3 space-x-2'>About Us</h6>
                <h1 className='text-3xl mt-5 font-bold'>We design , digital brands <br /> & digital projects.</h1>
                <p className='text-[12px] mt-3 text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur debitis dolorum rem porro hic praesentium at veniam eum, asperiores doloremque recusandae quod? ,  porro ipsa a repellat assumenda voluptatum , cupiditate omnis exercitationem doloribus earum.</p>
                <p className='text-[12px] mt-3 text-gray-600 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, amet repudiandae enim quaerat excepturi distinctio.</p>
                <Btn title='Read More' />
            </div>
        </div>
    );
}

export default AboutDigital;
