import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrderDetails } from "../../redux/actions";
import Loader from "../Loader/Loader";
import CartItem from "./CartItem";
import { Stripe } from "./Stripe";


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
    <div>
      {!loading && (
        <>
          {orderDetails ? (
            orderDetails.amount.map((e) => {
              return (
                <div>
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
          {orderDetails && orderDetails.total}
        </>
      )}
      {loading && <Loader />}
    </div>
  );
}

export default Cart;
