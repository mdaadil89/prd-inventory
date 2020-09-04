import * as types from './action.types';
import UserApi from '../../../data/user.api'

// export function loadProductsSuccess(products) {
//     return { type : types.LOAD_PRODUCTS_SUCCESS, products}
// }


export function addUserSuccess(user){
    return {type: types.ADD_USER_SUCCESS, user}
}

// export function loadProducts(){
//     return function(dispatch){
//         return ProductApi.getAllProducts().then(products => {
//             dispatch(loadProductsSuccess(products));
//         }).catch(error => {
//             throw(error);
//         })
//     }
// }

export function addUser(user) {
    return function(disptach) {
        return UserApi.addUser(user).then( user => {
            disptach(addUserSuccess(user));
        }).catch(error => {
            throw(error);
        })
    } 
}