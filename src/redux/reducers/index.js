const initialState = {
  products: [],
  oneProductId: [],
  categories: [],
  cart: [],
  filters: {
    productName: "",
    productCategory: "",
    productPrice: "",
  },
  productsCart: 0,
  orderDetails: null,
  getOneUser: null
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
      return{
        ...state,
        getOneUser: payload
      }
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
    // case "NEWPRODUCT_FORM":

    //     return {
    //       ...state,
    //       products: [...state.products, payload]
    //     }

    default:
      return { ...state };
  }
}
