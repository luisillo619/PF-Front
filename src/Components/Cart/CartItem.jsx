import React from "react";
import Loader from "../Loader/Loader";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { putToCart } from "../../redux/actions";
import { BsFillTrashFill } from "react-icons/bs";
import './CartItem.css';


function CartItem({ image, product, quantity, unitPrice,id }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  const subtractionHandler = () => {
    const DECREMENT = "decrement";
    dispatch(putToCart(DECREMENT, product, unitPrice, setLoading));
    // setCount(false);
    // if (count > 1) setCount(count - 1);
    // if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const handlerSums = () => {
    const INCREMENT = "increment";
    dispatch(putToCart(INCREMENT, product, unitPrice, setLoading));
    // setCount(false);
    // if (count < 10) setCount(count + 1);
    // if (cantidad < 10) setCantidad(cantidad + 1);
  };

  const deleteProduct = (e) => {
    const DELETE = "delete";
    // dispatch(putToCart(DELETE, product, unitPrice, setLoading));
    console.log(e.target.value)
  }

  return (
    <div className="flex w-screen justify-center ">
      <div className=" bg-white  flex flex-col w-3/6  self-center  justify-center items-center">
        <div
          className="  border-b border-solid border-slate-400 w-5/6 h-44 flex flex-row items-center justify-around
    "
        >
          <div>
            <img className="w32 h-32" src={image} alt={product} />
          </div>
          <div>
            <p>Price for unit ${unitPrice}</p>
          </div>

          <div className="flex justify-center">
            {count < 10 && (
              <button
                className=" inline-block w-6  h-6 bg-[#022957] bg-opacity-90  text-white font-medium text-xs  rounded shadow-md hover:bg-[#022957]  hover:shadow-lg focus:bg-[#022957]   active:bg-[#022957]  "
                onClick={handlerSums}
                disabled={loading === false ? true : false}
              >
                +
              </button>
            )}
            <p className="mx-2">{quantity}</p>
            <button
              className=" inline-block w-6  h-6 bg-[#022957] bg-opacity-90  text-white font-medium text-xs  rounded shadow-md hover:bg-[#022957]  hover:shadow-lg focus:bg-[#022957]   active:bg-[#022957] "
              onClick={subtractionHandler}
              disabled={loading === false ? true : false}
              value="-"
            >
              -
            </button>
          </div>

          <div className="flex flex-col align-middle items-center pt-1">
            <p className="text-sm font-semibold text-gray-900 dark:text-black truncate">
              Sub-Total: USD {quantity * unitPrice}
            </p>
            <button className='ButtonDeleteOrder' onClick={e=> deleteProduct(e)} value={id}>Borrar </button>
          </div>

          <br />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
