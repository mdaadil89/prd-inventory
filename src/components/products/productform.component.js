import React from 'react'
import { withFormik, Form, Field  } from 'formik'
import {  Button, Container, Row, Col } from 'react-bootstrap'
import uuid from 'uuid/v4' ;
import * as Yup from 'yup'

const ProductForm = ({ values, errors, touched, isSubmitting }) => (
    <div className="jumbotron">
        <Container>
        <Row>
        <div className="col-md-6 offset-sm-3">
                <h2>Add New Product</h2>
                <Form >
                         <Col sm={8}>
                         <div className="form-group">
                            <label htmlFor="name" >Product Name  </label> <br/>
                            <Field type="text"  name="name" placeholder="Enter Product Name" />
                            </div>
                         </Col> 

                         <Col sm={8}>
                         <div className="form-group">
                           <label htmlFor="desc" >Product description</label><br/>
                          <Field type="text" name="desc"  placeholder="Enter Product Description" />
                          </div>
                        </Col> 

                        <Col sm={8}>
                        <div className="form-group">
                            <label htmlFor="manu">Manufacturer</label><br/>
                            <Field type="text" name="manu" placeholder="Enter Product Manufacturer" />
                            </div>
                         </Col> 

                         <Col sm={8}>
                         <div className="form-group">
                            <label htmlFor="price">Price</label><br/>
                            <Field type="number" name="price"  placeholder="Enter Product Price" />
                            </div>
                         </Col> 
                         
                         <Col sm={8}>
                         <div className="form-group">
                                  <label htmlFor="qty" >Quantity</label><br/>
                                  <Field type="number" name="qty"   placeholder="Enter Product Quantity"/>
                                  </div>
                        </Col>
                        


                        <Row>
                            <Col sm={4}>
                        <button type="submit"  className="btn btn-primary"  disabled={isSubmitting}  >Submit</button>
                            </Col>

                            <Col sm={4}>
                        <button type="button" className="btn btn-dark"  >Close</button>
                            </Col>
                         </Row>
                         
                </Form></div>
                </Row>
                
        </Container>
    
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