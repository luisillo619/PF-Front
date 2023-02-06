import axios from "axios";
import {
  GET_PRODUCTS,
  ADD_FILTER,
  GET_CATEGORIES,
  GET_ONE_PRODUCT,
  ADD_PRODUCT_CART,
  FILTER_BY_LANDING_PAGE,
  ORDER_DETIALS,
  GET_ONE_USER,
  GET_COMMENTS_PRODUCT,
  POST_NEW_COMMENT,
  ERRORS,
} from "../types/index";

import Cookies from "js-cookie";

// const baseURL = "https://pf-back-production-f70b.up.railway.app"
export const postComment = (commentInfo) => async (dispatch) => {
  try {
    // quitar auth porque no le estamos mandando el token
    const { data } = await axios.post("http://localhost:3001/postComent", {
      user: commentInfo.user,
      product: commentInfo.product,
      comment: commentInfo.comment,
      rating: commentInfo.rating,
    });
  
    return dispatch({
      type: POST_NEW_COMMENT,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllCommentsProduct = (idProduct) => async (dispatch) => {
  try {
    const URL = `http://localhost:3001/adminGetComment/${idProduct}`;

    const { data } = await axios.get(URL, {}, {});

    return dispatch({
      type: GET_COMMENTS_PRODUCT,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

//Trae todos los productos
export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios(`http://localhost:3001/adminGetProducts`);

    return dispatch({
      type: GET_PRODUCTS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

//Action para rendeirzar el panel del Admin o del user
export const getOneUser = (id, setLoading) => async (dispatch) => {
  try {
    // RECORDAR EL TOKEEEEEN
    const { data } = await axios(
      `http://localhost:3001/getAccountProfile/${id}`
    );
    setLoading(false);
    return dispatch({
      type: GET_ONE_USER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

//Action para el login, no se envía al reducer, se envía a las cookies
export const login = (form, setLoading, setResponse) => async () => {
  try {
    // RECORDAR EL TOKEEEEEN
    const { data } = await axios.post(`http://localhost:3001/login`, { form });

    setLoading(false);
    setResponse(true);
    // data = {id:231, token}

    // PONER UN IF, SI ES ESTATUS 200, REDIRIGIR, SI NO, MOSTRAR ERROR
    // window.location.href = 'http://localhost:3000';
    Cookies.set("user", JSON.stringify(data), {
      maxAge: `${60 * 60}`,
    });

    const url = `http://localhost:3001/getNumberProducts/${data.id}`;
    const order = await fetch(url);
    if (order.status === 200 || order.status === 404) {
      const data = await order.json();
      const numberProducts = parseInt(data.numberOfProductsInCart);
      Cookies.set("order", JSON.stringify(numberProducts), {
        maxAge: `${60 * 60}`,
      });
    }
    window.location.href = "http://localhost:3000";
  } catch (error) {
    console.log(error);
  }
};

export const register =
  (form, setLoading, setResponse, setErrorRegister) => async () => {
    try {
      await axios.post(`http://localhost:3001/register`, { form });
      setLoading(false);
      setResponse(true);
      setErrorRegister(null);
      setTimeout(() => {
        window.location.href = "http://localhost:3000/login";
      }, 2000);
    } catch (error) {
      setLoading(false);
      setResponse(true);
      setErrorRegister(error.response.data);
    }
  };

export const getOneProduct =
  (idProduct, setLoading, setLoadingButton) => async (dispatch) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/producId/${idProduct}`
      );

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
    const { data } = await axios(`http://localhost:3001/adminGetCategories`);
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
    const response = await fetch(`http://localhost:3001/auth/login/success`, {
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
      console.log("soy la info", userInfo);
      Cookies.set("user", JSON.stringify(userInfo), {
        maxAge: `${60 * 60}`,
      });

      const url = `http://localhost:3001/getNumberProducts/${userInfo.id}`;
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

  const url = `http://localhost:3001/getOrderDetails/${id}`;
  const { data } = await axios.get(url, {
    headers: {
      "x-auth-token": `${token}`,
    },
  });
  setLoading(false);
  return dispatch({
    type: ORDER_DETIALS,
    payload: data,
  });
};

export const addToCart =
  (idProduct, idUser, total, count, unitPrice, image, setLoadingButton) =>
  async (dispatch) => {
    try {
      const userLoginCookies = Cookies.get("user");
      const token = userLoginCookies && JSON.parse(userLoginCookies).token;

      const url = `http://localhost:3001/postOrder`;
      const { data } = await axios.post(
        url,

        {
          product: idProduct,
          user: idUser,
          amount: count,
          total,
          unitPrice,
          image,
        },
        {
          headers: {
            "x-auth-token": `${token}`,
          },
        }
      );
      setLoadingButton(true);
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

export const putToCart =
  (action, idproduct, unitPrice, setLoading) => async (dispatch) => {
    const userLoginCookies = Cookies.get("user");
    const token = userLoginCookies && JSON.parse(userLoginCookies).token;
    const idUser = userLoginCookies && JSON.parse(userLoginCookies).id;
    setLoading(false);
    const url = `http://localhost:3001/putQuantityOrder`;
    const { data } = await axios.put(
      url,
      {
        action,
        product: idproduct,
        user: idUser,
        unitPrice,
      },
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    setLoading(true);
    Cookies.set("order", JSON.stringify(data.numberOfProductsInCart), {
      maxAge: `${60 * 60}`,
    });
    dispatch({
      type: ADD_PRODUCT_CART,
      payload: parseInt(data.numberOfProductsInCart),
    });

    return dispatch({
      type: ORDER_DETIALS,
      payload: data.updatedOrder,
    });
  };

export const sendProductsForm = (form, setResponse, setLoading) => async () => {
  try {
    const userLogin = Cookies.get("user");
    const token = JSON.parse(userLogin).token;
    const url = `http://localhost:3001/adminPostProducts`;

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
