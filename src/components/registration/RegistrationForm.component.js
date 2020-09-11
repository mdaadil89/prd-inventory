import React from 'react';
import { Field, Form, ErrorMessage, withFormik } from 'formik';
import * as Yup from 'yup';
import uuid from 'uuid/v4' ;


const phoneRegex = RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/im
  );

const AddUserForm = ({ status,errors, touched,isSubmitting}) => (
            <div> 
                <Form>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email ID</label>
                            <Field name="email" type="email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <Field name="location" type="text" className={'form-control' + (errors.location && touched.location ? ' is-invalid' : '')} />
                            <ErrorMessage name="location" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobile">Mobile Number</label>
                            <Field name="mobile" type="tel" className={'form-control' + (errors.mobile && touched.mobile ? ' is-invalid' : '')} />
                            <ErrorMessage name="mobile" component="div" className="invalid-feedback" />
                        </div>
                        
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2" >Register</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                </Form>
       
        
            </div>
)

const FormikAddUserForm = withFormik({
    mapPropsToValues({productname, quantity, price}) {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            location: '',
            mobile: ''

        }
    },
    validationSchema : Yup.object().shape({
        firstName: Yup.string()
            .min(3, 'First Name must be at least 3 characters')
            .required('First Name is required'),
        lastName: Yup.string()
            .min(3, 'Last Name must be at least 3 characters')
            .required('Last Name is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        location : Yup.string()
            .required('Location is required'),
        mobile: Yup.string()
            .matches(phoneRegex, 'Please enter a valid number')
            .required('Mobile Number is required')
    }),
    handleSubmit(values, {props, resetForm, setSubmitting}) 
    {
        let user = {id:  uuid() , ...values}
        props.addUser(user)
        setSubmitting(false);
        console.log(user);
        resetForm();
        // onSubmit={fields => {
                //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                // }}
        alert("Congratulations !! You've registered successfully.")
        //props.history.push('/products/')

    }
})(AddUserForm)

export default FormikAddUserForm

