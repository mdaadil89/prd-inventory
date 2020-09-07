import {combineReducers} from 'redux';
import productReducer from './products/reducers/product.reducer'
import userReducer from './users/reducers/user.reducer'



const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer
});

export default rootReducer;
 