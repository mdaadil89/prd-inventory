import * as types from '../actions/action.types'

// const  initialState ={
//  products:[]
// }

export default function productReducer(state=[] ,action){
    switch(action.type){
        case types.LOAD_PRODUCTS_SUCCESS:
            return action.products;
        
            case types.ADD_PRODUCT_SUCCESS:
                return [
                    ...state,
                    Object.assign({},action.prod)
                ]
                
        default:
            return state;
}
}