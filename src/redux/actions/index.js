import axios from "axios";
import {
  GET_PRODUCTS,
  ADD_FILTER,
  GET_CATEGORIES,
  GET_ONE_PRODUCT,
  ADD_PRODUCT_CART,
  FILTER_BY_LANDING_PAGE,
  ORDER_DETIALS
} from "../types/index";

import Cookies from "js-cookie";

const baseURL = "http://pf-back-production-f70b.up.railway.app"

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios(`${baseURL}/adminGetProducts`);
    console.log(data)
    return dispatch({
      type: GET_PRODUCTS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOneProduct = (idProduct, setLoading) => async (dispatch) => {
  try {
    const { data } = await axios(`${baseURL}/producId/${idProduct}`);
    setLoading(false);
    return dispatch({
      type: GET_ONE_PRODUCT,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await axios(`${baseURL}/adminGetCategories`);
    return dispatch({
      type: GET_CATEGORIES,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// FILTROS
export const addFilter = (filter) => {
  return {
    type: ADD_FILTER,
    payload: filter,
  };
};

// FALTA ESTAAAAAAAAAAAAAAAAAAAAAA
export const getUser = (setUser, setOrder) => async () => {
  try {
    console.log("estoy arto")
    const response = await fetch(`${baseURL}/auth/login/success`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": false,
      },
    });
  

    if (response.status === 200) {
      const userInfo = await response.json();
      setUser(userInfo);
      console.log("soy la info", userInfo)
      Cookies.set("user", JSON.stringify(userInfo), {
        maxAge: `${60 * 60}`,
      });

      const url = `${baseURL}/getNumberProducts/${userInfo.id}`;
      const order = await fetch(url);

      if (order.status === 200 || order.status === 404) {
        const data = await order.json();
        const numberProducts = parseInt(data.numberOfProductsInCart);
        console.log(numberProducts);
        setOrder(numberProducts);
        Cookies.set("order", JSON.stringify(numberProducts), {
          maxAge: `${60 * 60}`,
        });
      } else {
        throw new Error("A ocurrido un error al traer las ordenes");
      }
    } else {
      throw new Error("authentication has been failed!");
    }
  } catch (err) {
    
    console.log(err);
  }
};

export const getAllOrderDetails = (setLoading) => async (dispatch) => {
  const userLoginCookies = Cookies.get("user");
  const token = userLoginCookies && JSON.parse(userLoginCookies).token;
  const id = userLoginCookies && JSON.parse(userLoginCookies).id;
//roto
  const url = `/${id}`;
  const { data } = await axios.get(url, {
    headers: {
      "x-auth-token": `${token}`,
    },
  });
  setLoading(false)
  return dispatch({
    type: ORDER_DETIALS,
    payload: data
  })
};

export const addToCart =
  (idProduct, idUser, total, count, unitPrice,image) => async (dispatch) => {
    try {
      const userLoginCookies = Cookies.get("user");
      const token = userLoginCookies && JSON.parse(userLoginCookies).token;

      const url = `${baseURL}/postOrder`;
      const { data } = await axios.post(
        url,
      
        { product: idProduct, user: idUser, amount: count,total,unitPrice,image },
        {
          headers: {
            "x-auth-token": `${token}`,
          },
        }
      );
   
      Cookies.set("order", JSON.stringify(data.numberOfProductsInCart), {
        maxAge: `${60 * 60}`,
      });
      return dispatch({
        type: ADD_PRODUCT_CART,
        payload: parseInt(data.numberOfProductsInCart),
      });
    } catch (err) {
      console.log(err);
    }
  };

export const sendProductsForm = (form, setResponse, setLoading) => async () => {
  try {
    const userLogin = Cookies.get("user");
    const token = JSON.parse(userLogin).token;
    const url = `${baseURL}/adminPostProducts`;

    await axios.post(url, form, {
      headers: {
        "x-auth-token": `${token}`,
      },
    });
    setResponse(true);
    setLoading(false);
  } catch (err) {
    console.log(err);
  }
};

export const filterByLandingPage = (filter) => {
  return {
    type: FILTER_BY_LANDING_PAGE,
    payload: filter,
  };
};
