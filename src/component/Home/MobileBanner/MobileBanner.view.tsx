import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { mobileBannerstyle as style } from './static/MobileBanner.tailwind';

const MobileBanner = () => {
    return (
        <div className={style.mobile_banner}>
            <div className={style.search_box}>
                <div className={style.input_box}>
                    <span className={style.icon}><CiSearch/></span>
                    <input className={style.input} placeholder='Search products'/>
                </div>
                <span className={style.cartIcon}><IoCartOutline/></span>
            </div>
        </div>
    );
};

export default MobileBanner;