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
    <div>
      {count < 10 && <button onClick={handlerSums}>+</button>}
      {/* {!loadingPost ? (
        <button onClick={handleClick}>Agregar al carrito</button>
      ) : (
        <p>pepe</p> // cambiar por loader
      )} */}
      {count > 1 && (
        <button onClick={subtractionHandler} value="-">
          -
        </button>
      )}
      <img style={{ width: "200px" }} src={image} alt={product} />
      {cantidad}
      <br />
      {unitPrice}
      <br />
      <p>subtotal: {quantity * unitPrice}</p>
    </div>
  );
}

export default CartItem;
