import {createStore, applyMiddleware} from 'redux'
import productReducer from  '../../redux/products/reducers/product.reducer'
import thunk from 'redux-thunk';

export default function configureStore(){
    return createStore(
        productReducer,
        applyMiddleware(thunk)
    )
}