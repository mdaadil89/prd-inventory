//import { userConstants } from '../_constants';
import * as types from '../actions/action.types';

let user = localStorage.getItem('user');
const initialState = user ? { loggedIn: true, user } : {loggedIn:false};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      console.log('In Login Request')
      return {
        loggingIn: true,
        user: action.user
      };
    case types.LOGIN_SUCCESS:
      console.log('In Login Sucess')
      return {
        loggedIn: true,
        user: action.user
      };
    case types.LOGIN_FAILURE:
      console.log('In Login Failure')
      return {loggedIn:false};
      
    case types.LOGOUT:
      console.log('In Logout')
      return {loggedIn:false};
    default:
      return state
  }
}