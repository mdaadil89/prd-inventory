import React from 'react';

import {LoginPage} from '../../components/login/LoginPage'

const Login = (props) => (
    <div className="jumbotron">
    <div className="container">
        <div className="row">
        <div className="col-md-6 offset-md-3">
        <LoginPage {...props}/>
        </div>
            </div>
        </div>
    </div>
)

export default Login 