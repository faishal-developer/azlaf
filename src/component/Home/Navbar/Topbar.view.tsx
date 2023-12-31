import React from 'react';
import Language from './Language.view';
import { navStyle } from './static/Navbar.tailwind';

const style=navStyle.topbar;

const Topbar = () => {
    return (
        <div className={style.top_bar}>
            <div className={style.two_section}>
                <Language/>
                <p className={style.p_middle}>Help Center</p>
                <p >Helpline: 0964781656</p>
            </div>
            <div className={style.two_section}>
                <p>Become a Seller</p>
                <p className={style.p_middle}>Order Track</p>
                <p className={style.text_p}>Sign up / Login</p>
            </div>
        </div>
    );
};

export default Topbar;