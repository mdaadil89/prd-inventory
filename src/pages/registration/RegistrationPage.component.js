import React from 'react'
//import RegistrationForm from '../../components/registration/RegistrationForm.component'
import RegistrationClassComponent from '../../components/registration/RegistrationClass.component'

const RegistrationPage = () => (
        <div className="jumbotron">
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h3><center>Registration Form</center></h3>
                            <RegistrationClassComponent/>
                </div>
            </div>
        </div>
    </div>
)

export default RegistrationPage