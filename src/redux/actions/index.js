import axios from "axios";

import {
  GET_PRODUCTS,
  ADD_FILTER,
  GET_CATEGORIES,
  GET_ONE_PRODUCT,
  ADD_PRODUCT_CART,
  FILTER_BY_LANDING_PAGE,
  ORDER_DETIALS,
  GET_ALL_USERS,
  GET_ONE_USER,
  GET_COMMENTS_PRODUCT,
  POST_NEW_COMMENT,
  GET_ADDRESS,
  POST_ADDRESS,
  PUT_ADDRESS,
  POST_COMPLETE_INFO,
  DELETE_ADDRESS,
  GET_ORDERS,
  DELETE_ACCOUNT,
  RESET_ONE_PRODUCT,
} from "../types/index";

import Cookies from "js-cookie";
const { REACT_APP_API_URL } = process.env;

// const baseURL = "https://pf-back-production-f70b.up.railway.app"
export const postComment = (commentInfo) => async (dispatch) => {
  try {
    // quitar auth porque no le estamos mandando el token
    const { data } = await axios.post(`${REACT_APP_API_URL}/postComent`, {
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
    const URL = `${REACT_APP_API_URL}/adminGetComment/${idProduct}`;

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
    const { data } = await axios(`${REACT_APP_API_URL}/adminGetProducts`);
    // console.log(data)
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
      `${REACT_APP_API_URL}/getAccountProfile/${id}`
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
    const { data } = await axios.post(`${REACT_APP_API_URL}/login`, { form });

    setLoading(false);
    setResponse(true);
    // data = {id:231, token}

    // PONER UN IF, SI ES ESTATUS 200, REDIRIGIR, SI NO, MOSTRAR ERROR
    // window.location.href = 'http://localhost:3000';
    Cookies.set("user", JSON.stringify(data), {
      maxAge: `${60 * 60}`,
    });

    const url = `${REACT_APP_API_URL}/getNumberProducts/${data.id}`;
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
  (form, setLoading, setResponse, setErrorRegister, setLoadingButton) =>
  async () => {
    try {
      await axios.post(`${REACT_APP_API_URL}/register`, { form });
      setLoading(true);
      setResponse(true);
      setErrorRegister(null);
      setTimeout(() => {
        window.location.href = REACT_APP_API_URL;
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
      const userLoginCookies = Cookies.get("user");
      const token = userLoginCookies && JSON.parse(userLoginCookies).token;
      const id = userLoginCookies && JSON.parse(userLoginCookies).id;
      const { data } = await axios.get(
        `${REACT_APP_API_URL}/producId/${id}/${idProduct}`,
        {
          headers: {
            "x-auth-token": `${token}`,
          },
        }
      );

      if (setLoading) setLoading(false);
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
    const { data } = await axios(`${REACT_APP_API_URL}/adminGetCategories`);
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

// response solo va a estar disponible 1 sola vez, debido a que el auth almacena cookies en el back y solo retorna la info una sola vez al front hasta que pase 1 hora
export const getUser = (setUser, setOrder) => async () => {
  try {
    const response = await fetch(`${REACT_APP_API_URL}/auth/login/success`, {
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

      const url = `${REACT_APP_API_URL}/getNumberProducts/${userInfo.id}`;
      const order = await fetch(url);

      if (order.status === 200 || order.status === 404) {
        const data = await order.json();
        const numberProducts = parseInt(data.numberOfProductsInCart);

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

  const url = `${REACT_APP_API_URL}/getOrderDetails/${id}`;
  const { data } = await axios.get(
    url,
    {},
    {
      headers: {
        "x-auth-token": `${token}`,
      },
    }
  );
  setLoading(false);
  return dispatch({
    type: ORDER_DETIALS,
    payload: data,
  });
};

export const addToCart =
  (
    idProduct,
    idUser,
    total,
    count,
    unitPrice,
    image,
    setLoadingButton,
    setMensaje
  ) =>
  async (dispatch) => {
    try {
      console.log("aqui ando")
      const userLoginCookies = Cookies.get("user");
      const token = userLoginCookies && JSON.parse(userLoginCookies).token;

      const url = `${REACT_APP_API_URL}/postOrder`;
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
      setMensaje(data.message);
      Cookies.set("order", JSON.stringify(data.numberOfProductsInCart), {
        maxAge: `${60 * 60}`,
      });
      return dispatch({
        type: ADD_PRODUCT_CART,
        payload: parseInt(data.numberOfProductsInCart),
      });
    } catch (err) {
      setLoadingButton(true);
      setMensaje("Producto no se agrego al carrito");
      console.log(err);
    }
  };

export const putToCart =
  (action, idproduct, unitPrice, setLoading) => async (dispatch) => {
    const userLoginCookies = Cookies.get("user");
    const token = userLoginCookies && JSON.parse(userLoginCookies).token;
    const idUser = userLoginCookies && JSON.parse(userLoginCookies).id;
    setLoading(false);
    const url = `${REACT_APP_API_URL}/putQuantityOrder`;
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
    const token = userLogin && JSON.parse(userLogin).token;
    const id = userLogin && JSON.parse(userLogin).token;
    const url = `${REACT_APP_API_URL}/adminPostProducts/${id}`;

    await axios.post(url, form, {
      headers: {
        "x-auth-token": `${token}`,
      },
    });
    setResponse(true);
    setLoading(false);
    return;
  } catch (err) {
    setLoading(false);
    console.log(err);
  }
};

export const filterByLandingPage = (filter) => {
  return {
    type: FILTER_BY_LANDING_PAGE,
    payload: filter,
  };
};

// id producto
export const disableEnableProds = async (idProduct) => {
  try {
    const userLoginCookies = Cookies.get("user");
    const token = userLoginCookies && JSON.parse(userLoginCookies).token;
    const id = userLoginCookies && JSON.parse(userLoginCookies).id;

    await axios.put(
      `${REACT_APP_API_URL}/adminDeleteProducts/${id}`,
      { idProduct },
      {
        headers: {
          "x-auth-token": `${token}`,
        },
      }
    ); // luego cambiar a ruta deploid
    window.location.href = "http://localhost:3000/panelAdmin/adminGetProducts";
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const userLoginCookies = Cookies.get("user");
    const token = userLoginCookies && JSON.parse(userLoginCookies).token;
    const id = userLoginCookies && JSON.parse(userLoginCookies).id;
    // unicamente el admin ejecuta esta ruta
    const allUsers = (
      await axios.get(
        `${REACT_APP_API_URL}/getAllUsers/${id}`,

        {
          headers: {
            "x-auth-token": `${token}`,
          },
        }
      )
    ).data; // luego cambiar a ruta deploid
    return dispatch({
      type: GET_ALL_USERS,
      payload: allUsers,
    });
  } catch (error) {
    console.log(error);
  }
};

export const putAdminUser = (id, setLoading) => async (dispatch) => {
  try {
    const userLoginCookies = Cookies.get("user");
    const token = userLoginCookies && JSON.parse(userLoginCookies).token;
    setLoading(false);
    await axios.put(
      ` ${REACT_APP_API_URL}/adminChangeUser/${id}`,
      {},
      {
        headers: {
          "x-auth-token": `${token}`,
        },
      }
    ); // cambiar a ruta deploid

    setLoading(true);
    return;
  } catch (error) {
    console.log(error);
  }
};

export const blockAdminUser = (id, setLoading) => async () => {
  try {
    const userLoginCookies = Cookies.get("user");
    const token = userLoginCookies && JSON.parse(userLoginCookies).token;
    console.log(id);
    setLoading(false);
    await axios.put(
      `${REACT_APP_API_URL}/adminPutLockedUser/${id}`,
      {},
      {
        headers: {
          "x-auth-token": `${token}`,
        },
      }
    );
    setLoading(true);
    // cambiar a ruta deploid
  } catch (error) {
    console.log(error);
  }
};

//^Obtiene las address del usuario logeado
export function getAddress(userId) {
  return async function (dispatch) {
    try {
      let json = await axios.get(`${REACT_APP_API_URL}/getAddress/${userId}`);
      return dispatch({ type: GET_ADDRESS, payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
}

//^Crea las address del usuario en la DB
export function postAddress(userId, userToken, input) {
  return async function (dispatch) {
    try {
      const url = `${REACT_APP_API_URL}/postAddress/${userId}`;
      const { data } = await axios.post(url, input, {
        headers: { "x-auth-token": `${userToken}` },
      });
      window.location.href = "http://localhost:3000/panelUser";
      return dispatch({ type: POST_ADDRESS, payload: data });
    } catch (error) {
      console.log({ msg: error });
    }
  };
}

//^Crea name, lastName y docIdentity
export function postCompleteInfo(userId, userToken, input) {
  return async function (dispatch) {
    try {
      const url = `${REACT_APP_API_URL}/postCompleteInfo/${userId}`;
      const { data } = await axios.post(url, input, {
        //url es la ruta, el input ó {} lo que envío cómo body el 3cer parámetro la cabecera
        headers: { "x-auth-token": `${userToken}` },
      });
      window.location.href = "http://localhost:3000/panelUser";
      return dispatch({ type: POST_COMPLETE_INFO, payload: data });
    } catch (error) {
      console.log({ msg: error });
    }
  };
}

//^Modifica las address creadas
export function putAddress(userId, addressId, userToken, input) {
  return async function (dispatch) {
    try {
      const url = `${REACT_APP_API_URL}/putAddress/${userId}/${addressId}`;
      const { data } = await axios.put(url, input, {
        headers: { "x-auth-token": `${userToken}` },
      });
      window.location.href = "http://localhost:3000/panelUser";
      return dispatch({ type: PUT_ADDRESS, payload: data });
    } catch (error) {
      console.log({ msg: error });
    }
  };
}

//^Elimina las direcciones creadas
export function deleteAddress(userId, addressId, userToken) {
  console.log("Address " + addressId);
  console.log("User " + userId);
  console.log("userToken " + userToken);
  return async function (dispatch) {
    try {
      const url = `${REACT_APP_API_URL}/deleteAddress/${userId}/${addressId}`;
      const { data } = await axios.delete(url, {
        headers: { "x-auth-token": `${userToken}` },
      });
      window.location.reload();
      return dispatch({ type: DELETE_ADDRESS, payload: data });
    } catch (error) {
      console.log({ msg: error });
    }
  };
}

export const putProductsForm =
  (form, setResponse, setLoading, idProduct) => async () => {
    try {
      const userLogin = Cookies.get("user");
      const token = JSON.parse(userLogin).token;
      const id = userLogin && JSON.parse(userLogin).id;
      const url = `${REACT_APP_API_URL}/adminPutProducts/${id}`;

      await axios.put(
        url,
        { form, idProduct },
        {
          headers: {
            "x-auth-token": `${token}`,
          },
        }
      );
      setResponse(true);
      setLoading(false);
      window.location.href =
        "http://localhost:3000/panelAdmin/adminGetProducts";
      return;
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

export const deleteCookies = () => async () => {
  try {
    const userLoginCookies = Cookies.get("user");
    const token = userLoginCookies && JSON.parse(userLoginCookies).token;
    const id = userLoginCookies && JSON.parse(userLoginCookies).id;
    const type = userLoginCookies && JSON.parse(userLoginCookies).type;
    //Admin, User
    //const hola = Admin ? true : falso
    const blockUser = await axios.get(
      `${REACT_APP_API_URL}/deleteCookies/${id}`,
      {
        headers: {
          "x-auth-token": `${token}`,
        },
      }
    );
    const changeAdmin = await axios.get(
      `${REACT_APP_API_URL}/getAccountProfile/${id}`
    );

    if (blockUser.data) {
      Cookies.remove("user");
      Cookies.remove("order");
      window.location.href = "http://localhost:3000";
    }
    if (changeAdmin.data.admin !== type) {
      Cookies.remove("user");
      Cookies.remove("order");
      window.location.href = "http://localhost:3000";
    }
  } catch (error) {
    console.log(error);
  }
};

export function getOrders(userId, userToken) {
  console.log("Id " + userId);
  console.log("Token " + userToken);
  return async function (dispatch) {
    try {
      const url = `${REACT_APP_API_URL}/allOrders/${userId}`;
      const { data } = await axios.get(url, {
        headers: { "x-auth-token": `${userToken}` },
      });
      // window.location.href = "http://localhost:3000/panelUser";
      return dispatch({ type: GET_ORDERS, payload: data });
    } catch (error) {
      console.log({ msg: error });
    }
  };
}

export function deleteAccount(userId, userToken) {
  return async function (dispatch) {
    try {
      const url = `${REACT_APP_API_URL}/deleteAccount/${userId}`;
      const { data } = await axios.delete(url, {
        headers: { "x-auth-token": `${userToken}` },
      });
      Cookies.remove("user");
      Cookies.remove("order");
      window.location.href = "http://localhost:3000/";
      return dispatch({ type: DELETE_ACCOUNT, payload: data });
    } catch (error) {
      console.log({ msg: error });
    }
  };
}

export const reseteOneProduct = () => {
  return {
    type: RESET_ONE_PRODUCT,
  };
};
// PARAMETROS DE LA RUTA POST, PUT:
// URL, BODY, HEADER

// PARAMETROS DE LAS OTRAS RUTAS
// URL, HEADER
