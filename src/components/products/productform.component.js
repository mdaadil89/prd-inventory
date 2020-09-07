import React from 'react'
import { withFormik, Form, Field  } from 'formik'
import uuid from 'uuid/v4' ;
import * as Yup from 'yup'

const ProductForm = ({ values, errors, touched, isSubmitting }) => (
    <div className="jumbotron">
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h2><center>Add New Product</center></h2>
                <div>
                <Form >
                         <div className="form-group">
                            <label htmlFor="name" >Product Name  </label> 
                            <Field type="text"  name="name" placeholder="Enter Product Name" />
                            </div>
                       
                         <div className="form-group">
                           <label htmlFor="desc" >Product description</label>
                          <Field type="text" name="desc"  placeholder="Enter Product Description" />
                          </div>
                        

                        <div className="form-group">
                            <label htmlFor="manu">Manufacturer</label>
                            <Field type="text" name="manu" placeholder="Enter Product Manufacturer" />
                            </div>
                         

                         <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <Field type="number" name="price"  placeholder="Enter Product Price" />
                            </div>
                         
                         
                         <div className="form-group">
                                  <label htmlFor="qty" >Quantity</label>
                                  <Field type="number" name="qty"   placeholder="Enter Product Quantity"/>
                                  
                        </div>
                        


                        <div className="form-group">
                        <button type="submit"  className="btn btn-primary"  disabled={isSubmitting}  >Submit</button>
                            
                        <button type="button" className="btn btn-dark"  >Close</button>
                        </div>
                         
                </Form>
                </div>
                </div>
              </div>
                     </div>
                </div>
            
)


const FormikProductForm = withFormik({
        mapsPropsToValues({name,desc,manu,price,qty}){
            return {
                name:' ',
                desc: ' ',
                manu: ' ',
                price: ' ',
                qty: ' '
            }
        },

        validationScheme: Yup.object().shape({

        }),

        handleSubmit(values, { props, resetForm, setSubmitting, setErrors }) {
            console.log(values);
            let prod ={id:  uuid() , ...values}
            props.addMyProduct(prod)
            setSubmitting(false);
             console.log(prod);
            props.history.push('/products/')
        }

})(ProductForm)

export default FormikProductForm