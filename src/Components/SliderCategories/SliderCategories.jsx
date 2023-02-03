import React from 'react';
import Carousel from "react-multi-carousel";
import Product from "./Product";
import { productData, responsive } from "./data";
import "react-multi-carousel/lib/styles.css";
import "./SliderCategories.css";


export default function SliderOtro() {

    const product = productData.map((item) => (
        <Product key={item.name} name={ item.name } url={ item.imageurl } price={ item.price } Description={ item.description } />
    ));


    return (
        <div className='container-SliderOtro'>
            <h1>CATEGORIES</h1>
            <Carousel className='SliderOtro' showDots={ true } responsive={ responsive }>{ product }</Carousel>
        </div>
    );
};