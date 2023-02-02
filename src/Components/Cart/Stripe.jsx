import StripeCheckout from "react-stripe-checkout";
import React, {useState} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export const Stripe = ({priceTotal})=>{


const priceForStripe = priceTotal * 100;
const payNow = async token => {
    
    
    try {
         const data = {amount: priceForStripe,
            token}
        const url = "http://localhost:3001/postOrderStripe";
        const response = await axios.post(url, data)
            
        if(response.status === 200 ){
            console.log("succesful");
        }
     } catch (error) {
        console.log(error);
     }
 }
 const Key = "pk_test_51MWP3JJ3jAR1l2SZf36NOPzaOgYoV81q3GmahowVuOVjmPSHoEMBKshXs7UGLfbwzxogy39fjTaK8x2vK8oJHgLc00qVXlEX2H";


     return (
         <div className=" flex  self-center justify-center items-center">
             
            
            <StripeCheckout
             stripeKey={Key}
             label="Pay Now"
             name="Pay With Credit Card"
             billingAddress
             shippingAddress
             amount={priceForStripe}
             description={`Total is ${priceTotal}`}
             token={payNow}
            />

         </div>
     )
}