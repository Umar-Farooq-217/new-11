import React from 'react';
import '../../globals.css'
import Navbar from '../navbar/navbar'; 
import Btn from '../btn/btn';

const Header = (props) => {
    return (
      
        <div className='head'>
   <div>

     <Navbar/>
    </div>
    <h1 className='text-white text-3xl mt-24 font-semibold ml-28'>{props.services} <br /> {props.agency}</h1>
    <p className='text-white text-[10px] mt-3 ml-28'>{props.pera}<br/>{props.para}</p>
    <p className='ml-28 pb-24'>
    {/* <Btn title='Learn More'/> */}
    {props.butt}

    </p>
</div>
       

       
    );
}

export default Header;
