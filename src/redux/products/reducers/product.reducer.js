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

                case types.EDIT_PRODUCT_SUCCESS:
                    let index = state.findIndex(prod => prod.id === action.prod.id)
                    let prods = state.filter( prod => prod.id !== action.prod.id)
                    prods.splice(index, 0, action.prod)
                    return prods
                    
                
        default:
            return state;
}
}