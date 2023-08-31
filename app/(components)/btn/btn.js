import React from 'react';

const Btn = (props) => {
    return (
        
            <button className='bg-blue-600 rounded-xl text-[14px] w-28 mt-5 text-white font-semi-bold py-1 hover:text-red-400 hover:bg-green-300 hover:scale-[1.2] font-semibold' beauty='props.style'>{props.title}</button>
        
    );
}

export default Btn;
