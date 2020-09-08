import React from 'react';
import * as types from './action.types';
import UserApi from '../../../data/user.api'
import {Redirect} from 'react-router-dom'

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
                    dispatch(success(user));
                    history.push('/signin');
                    //return <Redirect from="/signin" to="/products" />
                },
                error => {
                    dispatch(failure(error.toString()));
                    //dispatch(alertActions.error(error.toString()));
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