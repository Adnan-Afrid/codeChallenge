import axios from "axios";

const addNewItem = (item) => async (dispatch) => {
  dispatch({ type: "CREATE_ITEM_REQUEST" });
  item.source = "custom";
  try {
    const response = await axios.post(
      `http://localhost:5006/items`,
      item
    );
    dispatch({ type: "CREATE_ITEM_REQUEST_SUCCESS", payload: response });
  } catch (error) {
    dispatch({ type: "CREATE_ITEM_REQUEST_FAILURE", payload: error });
  }
};
export default addNewItem;