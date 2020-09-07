import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../index'
import thunk from 'redux-thunk';
import productReducer from '../products/reducers/product.reducer';

export default function configureStore(){
    return createStore(
        rootReducer,
       //productReducer,
        applyMiddleware(thunk)
    )
}