import Image from 'next/image';
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { navStyle } from './static/Navbar.tailwind';

const style=navStyle.navbar;

const Navbar = () => {
    return (
        <nav className={style.nav_container}>
            <div className={style.nav_cont}>
                <figure>
                    <Image alt='logo' height={38} width={130} src={'/logo.png'}/>
                </figure>
                <div className={style.inputBox}>
                    <input className={style.input} type='text' placeholder='Search Product'/>
                    <button className={style.search_btn}><CiSearch/></button>
                </div>
                <div className={style.right_cont}>
                    <div className={style.icons}>
                        <span className={style.icon}><FaRegUser/></span>
                        <span className={style.icon}><FaRegHeart/></span>
                        <span className={style.icon}><IoCartOutline/></span>
                    </div>
                    <figure className={style.cloud_service}>
                        <Image width={150} height={80} alt='cloud service' src={'/Cloud_ser.png'}/>
                    </figure>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;