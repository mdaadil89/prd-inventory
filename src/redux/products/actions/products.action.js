import * as types from './action.types';
import ProductApi from '../../../data/product.api'
import axios from 'axios';
import _ from  'lodash';

export function loadProductsSuccess(products) {
    return { type : types.LOAD_PRODUCTS_SUCCESS, products}
}

export function addProductSuccess(prod){
    return {type: types.ADD_PRODUCT_SUCCESS, prod}
}

export function editProductSuccess(prod){
    return {type: types.EDIT_PRODUCT_SUCCESS, prod}
}

export function deleteProductSuccess(ids) {
    return {type: types.DELETE_PRODUCT_SUCCESS, ids}    
}

export function loadProducts(){
    return function(dispatch){
        return ProductApi.getAllProducts().then(products => {
            dispatch(loadProductsSuccess(products));
        }).catch(error => {
            throw(error);
        })
    }
}

export function addProduct(prod) {
    return function(disptach) {
        return ProductApi.addProduct(prod).then( prod => {
            disptach(addProductSuccess(prod));
        }).catch(error => {
            throw(error);
        })
    } 
}

export function editProduct(prod, id) {
    return function(disptach) {
        return ProductApi.editProduct(prod, id).then( prod => {
            disptach(editProductSuccess(prod));
        }).catch(error => {
            throw(error);
        })
    } 
}

export const deleteProduct = (ids) => {

  
    return function () {
        const request = axios.all(_.map(ids, (id) => 
        {   
            ProductApi.deleteItem(id);
        }));
        request.then(axios.spread( (...responses) => {
            console.log(responses)
            loadProducts();
            
        })).catch( errors => console.log(errors)
        )
        }

    }
