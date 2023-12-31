'use client'
import React from 'react';
import {banner as style} from './static/banner.tailwind';
import {fakeItems} from './static/fakeItems';
import SingleItemsCarousel from '@/component/reusableItems/SingleItemsCarousel';
import Image from 'next/image';
import { FaAngleRight } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className={style.banner}>
            <SingleItemsCarousel>
                <Image width={1920} height={381} alt='banner' src={'/banner1.png'}/>
                <Image width={1920} height={381} alt='banner' src={'/banner1.png'}/>
                <Image width={1920} height={381} alt='banner' src={'/banner1.png'}/>
            </SingleItemsCarousel>
            <div className={style.banner_cont}>
                <div className={style.items_cont}>
                    {fakeItems.map((item)=>(
                        <div className={style.items} key={item.id}>
                            <span className={style.icons}>{item.icons}</span>
                            <span className={style.items_flex}>
                                {item.title}
                                <span className={style.right_angle}><FaAngleRight/></span>
                            </span>
                            
                            <div className={style.subItems}>
                                {item.subItems.map((item,i)=>(
                                    <p className={style.sub_para} key={i}>{item}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;