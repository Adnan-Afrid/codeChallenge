import axios from 'axios';

const fetchPosts = () => async (dispatch)=> {
    try {
         const response = await axios.get(`http://localhost:5006/items`)
        //  const fetchData = await response.json();
        //  console.log("fetchData = ",fetchData)
         dispatch({type: "FETCH_POSTS_SUCCESS", payload: response})
    }     
    catch (error) {
        dispatch({type:"FETCH_POSTS_FAILURE", payload:error});
        
    }
}
const addPosts = () => async (dispatch) =>{
    // try {
    //     console.log("response of try ")
    //      const response = await axios.get(`http://localhost:5006/items`)
    //      console.log("response of api ", response)
    //     // dispatch({type: "FETCH_POSTS_SUCCESS", payload: postData})
    // }     
    // catch (error) {
    //     dispatch({type:"FETCH_POSTS_FAILURE", payload:error});
    // }
}

export default {fetchPosts, addPosts};