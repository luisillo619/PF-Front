import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrderDetails } from "../../redux/actions";
import Loader from "../Loader/Loader";
import CartItem from "./CartItem";
import { Stripe } from "./Stripe";

function Cart() {

  const cart = useSelector((state)=> state.cart) 
  console.log("sada",cart);
  const filterPrice = cart.map(p=> p.price * p.counter).reduce((a,b)=> a+b)
  console.log("filter", filterPrice);
  const filterCounter = cart.map(c=>c.counter)  
  console.log("count", filterCounter);
   
  
  const [priceTotal , setPriceTotal] = useState([0])
  
    for (let i = 0; i < filterCounter.length; i++) {
      var sumar = 0 + filterCounter[i] // 3 3 1
       
       console.log("suma" ,sumar);
      }
  
 useEffect(()=>{ // poner condicional
              
      setPriceTotal(filterPrice)
                           
},[])
  const [loading, setLoading] = useState(true);
  const orderDetails = useSelector((state) => state.orderDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrderDetails(setLoading));
    return () => {
      dispatch(getAllOrderDetails(setLoading));
    };
  }, [dispatch]);

  console.log(orderDetails);
  return (
    <div className=" flex flex-col w-screen justify-items-center items-center bg-amber-200 bg-opacity-40  ">
      {!loading && (
        <>
          {orderDetails.amount.map((e) => {
            return (
              <div  className="flex flex-row w-screen flex-wrap mt-20">
                <CartItem
                  key={e._id}
                  id={e._id}
                  image={e.image}
                  product={e.product}
                  quantity={e.quantity}
                  unitPrice={e.unitPrice}
                />
              </div>
            );
          })}
          <Stripe priceTotal={priceTotal} />
        </>
      )}
      <div className=" bg-white flex flex-row w-3/5    h-36 ">
                 <div className="flex w-screen justify-center items-center">
                 <p >Total to pay: ${priceTotal} </p>

                 </div>
                 <div className="flex w-screen justify-center item-center ">
                         <Stripe priceTotal={priceTotal}/>
                       </div>
                 </div>
      {loading && <Loader />}
    </div>
  );
}

export default Cart;
