const initialState = {
    fetchCart: [],
    loading: false,
    error: null,
  };
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_CART_REQUEST":
        return {
          ...state,
          loading: true,
          error: null,
        };
      case "FETCH_CART_SUCCESS":
        return {
          ...state,
          loading: false,
          fetchCart: [...state.fetchCart, action.payload],
        };
  
      case "FETCH_CART_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  