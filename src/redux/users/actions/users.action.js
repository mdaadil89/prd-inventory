
import React from 'react';
import * as types from './action.types';
import UserApi from '../../../data/user.api'


import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();



export function addUserSuccess(user){
    return {type: types.ADD_USER_SUCCESS, user}
}



export function addUser(user) {
    return function(disptach) {
        return UserApi.addUser(user).then( user => {
            disptach(addUserSuccess(user));
        }).catch(error => {
            throw(error);
        })
    } 

}



export function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        UserApi.login(email, password)
            .then(
                user => { 
                    if(user === undefined)
                    dispatch(failure('Not Able to Login'));
                    else
                    { 
                        localStorage.setItem('user', JSON.stringify(user))
                        console.log( localStorage.getItem('user'))
                    dispatch(success(email));
                    
                
                }
                    //return <Redirect from="/signin" to="/products" />
                }
                
            );
    };

    function request(user) { return { type: types.LOGIN_REQUEST, user } }
    function success(user) { return { type: types.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: types.LOGIN_FAILURE, error } }
}
 
export function logout() {
    UserApi.logout();
    return { type: types.LOGOUT };
} 

