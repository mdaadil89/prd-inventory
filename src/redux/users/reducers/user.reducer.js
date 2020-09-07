import * as types from '../actions/action.types'



export default function userReducer(state=[],action){
    switch(action.type){
        // case types.LOAD_PRODUCTS_SUCCESS:
        //     return action.products;

        case types.ADD_USER_SUCCESS:
            return [
                ...state,
                Object.assign({},action.user)
            ]
    
        default:
            return state;
    }
} 