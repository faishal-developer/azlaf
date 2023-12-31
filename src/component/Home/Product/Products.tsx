'use client';
import MultiItemsCarousel from "@/component/reusableItems/MultiItemsCarousel";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import {productsData} from "./static/ProductsData";
import ProductCard from "./ProductCard";
import { productStyle as style } from "./static/product.tailwind";

const Products = () => {
  return (
    <div className={style.container}>
      <div className={style.flash_sale_cont}>
        <div className={style.flash_sale}>
          <p className={style.flash_para}>FlashSale</p>
          <div className={style.timer_cont}>
            <span className={style.end_in}>Ending in</span>
            <span className={style.timer_btn}>14</span> 
            <span className={'text-primary'}> : </span> 
            <span className={style.timer_btn}> 28</span> 
            <span className={'text-primary'}> : </span>
            <span className={style.timer_btn}> 45</span>
          </div>
          
        </div>
          <span className={style.sea_more}>
            See More 
            <FaAngleRight/>
          </span>
      </div>
      <div>
        <MultiItemsCarousel>
          {
            productsData.map((item)=>(
              <ProductCard key={item.id} data={item}/>
            ))
          }
        </MultiItemsCarousel>
      </div>
    </div>
  );
};

export default Products;
