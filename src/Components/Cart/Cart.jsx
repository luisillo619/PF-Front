import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrderDetails } from "../../redux/actions";
import Loader from "../Loader/Loader";
import CartItem from "./CartItem";
import { Stripe } from "./Stripe";
import './Cart.css';


function Cart() {
  const [loading, setLoading] = useState(true);

  const orderDetails = useSelector((state) => state.orderDetails);
  console.log(orderDetails)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrderDetails(setLoading));
    return () => {
      dispatch(getAllOrderDetails(setLoading));
    };
  }, [dispatch]);

 
  return (
    <div className="container-Cart flex flex-col w-6/6  justify-center items-center self-center mt-4" >
      {!loading && (
        <>
          {orderDetails ? (
            orderDetails.amount.map((e) => {
              return (
                <div className="flex justify-center items-center self-center">
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
            }) 
          ) : (
            <p>Sin ordenes</p>
          )
          }
          {orderDetails && <Stripe priceTotal={orderDetails.total} />}
          ${orderDetails && orderDetails.total}
        </>
      )}
      {loading && <Loader />}
    </div>
  );
}

export default Cart;