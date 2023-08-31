import React from 'react';

const TeamCard = (props) => {
    return (

        <div className='bg-gray-200 hover:bg-indigo-300 text-white  h-64'>
        <h1 className='text-black hover:text-white  font-semibold  pt-[238px] text-center'>{props.title}</h1>
    </div>
    );
}

export default  TeamCard;
