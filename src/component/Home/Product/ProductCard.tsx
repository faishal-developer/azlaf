import Image from 'next/image';
import React from 'react';
import { CiHeart } from "react-icons/ci";
import { productStyle as style } from './static/product.tailwind';

const ProductCard = ({data}:{data:any}) => {
    return (
        <div className={style.card_container}>
            <div className={style.img_container}>
                <div className={style.heart}><CiHeart/></div>
                <figure className={style.image}>
                    <Image width={185} layout='responsive' height={190} alt={data.title} src={data.image}/>
                </figure>
                <figure className={style.discount}>
                    <Image width={62} height={22} alt='product' src={'/Discount.png'} />
                </figure>
            </div>
            <div className={style.data_card}>
                <p className={style.title}>{data.title}</p>
                <div className={style.price_cont}>
                    <p className={style.price}>{data.price}</p>
                    <del className={style.del_price}>{data.originPrice}</del>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;