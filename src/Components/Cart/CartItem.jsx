import React from "react";
import Loader from "../Loader/Loader";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { putToCart } from "../../redux/actions";


function CartItem({ image, product, quantity, unitPrice }) {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState(1);

  const subtractionHandler = () => {
    const DECREMENT = "decrement"
    dispatch(putToCart(DECREMENT, product, unitPrice, setLoading))
    // setCount(false);
    // if (count > 1) setCount(count - 1);
    // if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const handlerSums = () => {
    const INCREMENT = "increment"
    dispatch(putToCart(INCREMENT, product, unitPrice,setLoading))
    // setCount(false);
    // if (count < 10) setCount(count + 1);
    // if (cantidad < 10) setCantidad(cantidad + 1);
  };

  return (
    <div>
      {count < 10 && <button onClick={handlerSums}  disabled = {loading === false ? true: false } >+</button>}
     
      
        <button onClick={subtractionHandler}  disabled = {loading === false ? true: false } value="-">
          -
        </button>
  
      <img style={{ width: "200px" }} src={image} alt={product} />
      {quantity}
      <br />
      {unitPrice}
      <br />
      <p>subtotal: {quantity * unitPrice}</p>
    </div>
  );
}

export default CartItem;
