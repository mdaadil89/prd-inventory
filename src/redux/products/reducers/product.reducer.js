import * as types from '../actions/action.types'
import { forEach } from 'lodash';

// const  initialState ={
//  products:[]
// }

export default function productReducer(state=[] ,action){
    let prods;
    switch(action.type){
        case types.LOAD_PRODUCTS_SUCCESS:
            return action.products;
        
            case types.ADD_PRODUCT_SUCCESS:
                return [
                    ...state,
                    Object.assign({},action.prod)
                ]

                case types.EDIT_PRODUCT_SUCCESS:
                    let index = state.findIndex(prod => prod.id === action.prod.id)
                     prods = state.filter( prod => prod.id !== action.prod.id)
                    prods.splice(index, 0, action.prod)
                    return prods
                    
                case types.DELETE_PRODUCT_SUCCESS:
                     prods = state;
                   action.ids.forEach(id => 
                    {  prods = prods.filter(prod => prod.id !== id) 
                    })
                    return prods
                
        default:
            return state;
}
}