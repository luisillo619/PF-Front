import React from "react";
import Loader from "../Loader/Loader";
import { useState } from "react";


function CartItem({ image, product, quantity, unitPrice }) {
  const [loadingPost, setLoadingPost] = useState(false);
  const [cantidad, setCantidad] = useState(quantity) 
  const [count, setCount] = useState(1);

  const handleClick = () => {};
  const subtractionHandler = () => {
    if (count > 1) setCount(count - 1);
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const handlerSums = () => {
    if (count < 10) setCount(count + 1);
    if (cantidad < 10) setCantidad(cantidad + 1);
  };
console.log(count)
  return (
    <div className="  flex flex-col w-screen  justify-items-center items-center ">
      <div className=" bg-white  flex flex-col w-3/5 items-center">

<div className="  border-b border-solid border-slate-400 w-5/6 h-44 flex flex-row items-center justify-around
">
<div  className="flex justify-center">
      {count < 10 && <button  className=" inline-block w-6 h-6 bg-[#2C3E50] bg-opacity-90  text-white font-medium text-xs  rounded shadow-md hover:bg-[#2C3E50]  hover:shadow-lg focus:bg-[#2C3E50]  active:bg-[#2C3E50]  active:shadow-lg" onClick={handlerSums}>+</button>}
      {/* {!loadingPost ? (
        <button onClick={handleClick}>Agregar al carrito</button>
      ) : (
        <p>pepe</p> // cambiar por loader
      )} */}
          {cantidad}
      {count > 1 && (
        <button  className=" inline-block w-6 h-6 bg-[#2C3E50] bg-opacity-90  text-white font-medium text-xs  rounded shadow-md hover:bg-[#2C3E50]  hover:shadow-lg focus:bg-[#2C3E50]  active:bg-[#2C3E50]  active:shadow-lg" onClick={subtractionHandler} value="-">
          -
        </button>
      )}
      </div>
      <img className="w-24 h-24" src={image} alt={product} />
      <br />
      <p>Price per unit ${unitPrice}</p>
      <br />
      <div className="flex flex-col align-middle items-center pt-1">
      <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">subtotal: {quantity * unitPrice}</p>

    </div>


    </div>
    </div>
    </div>
  );
}

export default CartItem;
