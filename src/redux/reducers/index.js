import {combineReducers} from 'redux';
import PostReducers from './postReducers';
import cartReducer from './cartReducer';


const rootReducer = combineReducers({
    PostReducers,
    cartReducer
})

export default rootReducer