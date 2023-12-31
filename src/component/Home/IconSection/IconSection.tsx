import React from 'react';
import Image from 'next/image';
import {icons} from './static/fakeItems';
import { FaAngleRight} from "react-icons/fa6";
import {iconStyle} from './static/icon.tailwind';

const IconSection = () => {
    return (
        <div className={iconStyle.container}>
            {icons.map((items)=>(
                <div className={iconStyle.icon_cont} key={items.id}>
                    <div className={iconStyle.icon}>
                        <Image className={iconStyle.image} height={30} width={30} src={items.image} alt='icon'/>
                        <span className='ml-1 text-center'>{items.title}</span>
                    </div>
                    <span className='hidden lg:block'><FaAngleRight/></span>
                </div>
            ))}
        </div>
    );
};

export default IconSection;