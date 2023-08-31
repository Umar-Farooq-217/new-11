import React from 'react';
import Image from 'next/image';
import '../../globals.css'
const ClientCard = (props) => {
    return (
        <div className='cloot hover:bg-blue-400 '>
             <Image className='w-28 h-28 flex mx-auto rounded-[80px] mt-7' src={props.src} width='100' height='100'/>
             <h1 className='text-white text-center font-semibold mt-7'>{props.heading}</h1>
             <h1 className='text-white text-center '>{props.title}</h1>
             <p className='text-white text-center mt-5 text-[12px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veniam tenetur, nostrum consequaturoptio ut  sint, labore fuga voluptas eum dolor iusto? Quia quibusdam inventore accusantium placeat rerum, hell jag  obcaecati non. Nesciunt?</p>
        </div>
    );
}

export default ClientCard;
