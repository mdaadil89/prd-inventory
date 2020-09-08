import {combineReducers} from 'redux';
import productReducer from './products/reducers/product.reducer'
import userReducer from './users/reducers/user.reducer'
import authenticationReducer from './users/reducers/authentication.reducer'



const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  authentication : authenticationReducer
});

export default rootReducer;
 