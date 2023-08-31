import React from 'react';

const OurPortfolio = (props) => {
    return (
        <div className='bg-gray-400 hover:bg-green-200   h-56'>
            <h1 className='text-white  font-semibold hover:bg-green-200   pt-[190px] text-center'>{props.title}</h1>
        </div>
    );
}

export default OurPortfolio;
