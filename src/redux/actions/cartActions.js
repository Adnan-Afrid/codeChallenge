const fetchCart = (id) => async (dispatch)=> {
    try {
         const response = await fetch(`http://localhost:5006/items/${id}`)
         const fetchedCart = await response.json();
         dispatch({type: "FETCH_CART_SUCCESS", payload: fetchedCart})
    }     
    catch (error) {
        dispatch({type:"FETCH_CART_FAILURE", payload:error});
        
    }
}

export default {
    fetchCart
};
