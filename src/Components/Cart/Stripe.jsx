import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

export const Stripe = ({ priceTotal }) => {
  const [isLoading, setLoading] = useState(false);
  const userLoginCookies = Cookies.get("user");
  const userId = userLoginCookies && JSON.parse(userLoginCookies).id;

  const priceForStripe = priceTotal * 100;
  const payNow = async (token) => {
    setLoading(true);
    try {
      const data = { amount: priceForStripe, token, user: userId };
      const url = "http://localhost:3001/postOrderStripe";
      const response = await axios.post(url, data);
      Cookies.remove("order");
      console.log("successful");

      if (response.status === 200) {
        console.log("successful");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    if (!isLoading) window.location.href = "http://localhost:3000/";
  };
  const Key =
    "pk_test_51MWP3JJ3jAR1l2SZf36NOPzaOgYoV81q3GmahowVuOVjmPSHoEMBKshXs7UGLfbwzxogy39fjTaK8x2vK8oJHgLc00qVXlEX2H";

  return (
    <div className=" flex self-center justify-center items-center">
      {isLoading ? (
        <div>Payment successful...</div>
      ) : (
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
      )}
    </div>
  );
};
