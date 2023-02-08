const initialState = {
  products: [],
  oneProductId: {},
  categories: [],
  users: [],
  cart: [],
  filters: {
    productName: "",
    productCategory: "",
    productPrice: "",
  },
  productsCart: 0,
  orderDetails: null,
  getOneUser: null,
  errors: [],
  commentsId: [],
  getAddress: "",
  getOrders: '',
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: payload,
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: payload,
      };
    case "ADD_FILTER":
      return {
        ...state,
        filters: payload,
      };

    case "GET_ONE_PRODUCT":
      return {
        ...state,
        oneProductId: payload,
      };

    case "GET_ONE_USER":
      return {
        ...state,
        getOneUser: payload,
      };
    case "ADD_PRODUCT_CART":
      return {
        ...state,
        productsCart: payload,
      };

    case "FILTER_BY_LANDING_PAGE":
      return {
        ...state,
        filters: { ...state.filters, productCategory: payload },
      };

    case "ORDER_DETIALS":
      return {
        ...state,
        orderDetails: payload,
      };

    case "ERRORS":
      return {
        ...state,
        errors: [...state.errors, payload],
      };

    case "GET_COMMENTS_PRODUCT":
      return {
        ...state,
        commentsId: payload,
      };

    case "POST_NEW_COMMENT":
      return {
        ...state,
        commentsId: [...state.commentsId, payload],
      };

    case "GET_ALL_USERS":
      return {
        ...state,
        users: payload,
      };

    case "GET_ADDRESS":
      return {
        ...state,
        getAddress: payload,
      };
    case "POST_ADDRESS": //El post no hace nada, pero se debe de poner
      return {
        ...state,
      };
    case "POST_COMPLETE_INFO": //El post no hace nada, pero se debe de poner
      return {
        ...state,
      };
    case "PUT_ADDRESS":
      return {
        ...state,
      };
    case "DELETE_ADDRESS":
      return {
        ...state,
      };
      case "GET_ORDERS":
        return{
          ...state,
          getOrders: payload
        }
        case 'DELETE_ACCOUNT': 
        return {
            ...state,
        };

        case "RESET_ONE_PRODUCT":
          return{
            ...state,
            oneProductId: {}
          }
    default:
      return { ...state };
  }
}
