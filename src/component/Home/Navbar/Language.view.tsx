import React from 'react';
import {navStyle} from "./static/Navbar.tailwind";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const style=navStyle.language;

const Language = () => {
    return (
        <div className={style.lang_container}>
            <div className={style.header}>
                Language
                <span className={style.icon_down}><FaAngleDown/></span>
                <span className={style.icon_up}><FaAngleUp/></span>
            </div>
            <ul className={style.lang_list}>
                <p className={style.list}>Bangla</p>
                <p className={style.list}>English</p>
            </ul>
        </div>
    );
};

export default Language;