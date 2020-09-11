import React from 'react'

import {
  Formik,
  Form,
  Field,
  ErrorMessage
} from 'formik'

import uuid from 'uuid/v4' ;
import * as Yup from 'yup'




const ProductForm = ( props) => {
    
  const { addMyProduct, editMyProduct , history, type , product } = props

  console.log('products', product)


  const initialValues = {
    name: product.name || '',
    description: product.description|| '',
    manufacturer:  product.manufacturer || '',
    price: product.price || '',
    qty: product.qty || ''
  }
  
  
  const onSubmit = (values , submitProps ) => {
    
         if(type === 'Add')    { 
           
          console.log('Form data', initialValues)
          console.log('Product data', product)
          let prod ={id:  uuid() , ...values}
          addMyProduct(prod)
          console.log('Props in submit func',props)
          console.log('submitProps', submitProps)
          submitProps.setSubmitting(false)
          submitProps.resetForm()
          alert("Product has been added")
          history.push('/products')    }

          else 
          {
            console.log('Form data', initialValues)
          console.log('Product data', product)
          let prod ={id:  product.id, ...values}
          editMyProduct(prod, product.id)
          console.log('Props in submit func',props)
          console.log('submitProps', submitProps)
          submitProps.setSubmitting(false)
          submitProps.resetForm()
          alert("Product has been added")
          history.push('/products')

          }
  }
  
  const validationSchema = Yup.object().shape({
    name: Yup.string()
    .min(3, 'Product Name must be at least 3 characters')
    .required('Product Name is required'),
  
    description: Yup.string()
    .min(3, 'Description must be at least 3 characters')
    .required('Description is required'),
  
    manufacturer: Yup.string()
    .min(3, 'Manufacturing must be at least 3 characters')
    .required('Manufacturing is required'),
  
    price : Yup.number()
    .required('Price is required'), 
  
    qty : Yup.number()
    .required('Quantity is required')
  })
  


 return  (
     <Formik
     initialValues={ initialValues}
     validationSchema={validationSchema}
     onSubmit={onSubmit}
     enableReinitialize
      >
        {  formik => {
        console.log('Formik props', formik)
        return (

          <div className="jumbotron">
          <div className="container">
              <div className="row">
                  <div className="col-md-6 offset-md-3">
                      <h3><center>{type} New Product</center></h3>
                        <Form >
                            <div className="form-group">
                            <label htmlFor="name" >Product Name  </label> 
                            <Field name="name"  
                                type="text"  
                                className={'form-control' + (formik.errors.name && formik.touched.name ? ' is-invalid' : '')}
                                placeholder="Enter Product Name" />
                                <ErrorMessage 
                                  name="name" 
                                  component="div" 
                                    className="invalid-feedback"/>
                                 </div>
                               
                            <div className="form-group">
                            <label htmlFor="description" >Product description</label>
                              <Field type="text"  
                              name="description" 
                              className={'form-control' + (formik.errors.description && formik.touched.description ? ' is-invalid' : '')}
                              placeholder="Enter Product Description" />
                              <ErrorMessage 
                                  name="description" 
                                  component="div" 
                                  className="invalid-feedback" />
                                </div>
                                
        
                            <div className="form-group">
                            <label htmlFor="manu">Manufacturer</label>
                              <Field type="text" 
                              name="manufacturer" 
                              className={'form-control' + (formik.errors.manufacturer && formik.touched.manufacturer ? ' is-invalid' : '')}
                              placeholder="Enter Product Manufacturer" />
                            <ErrorMessage 
                              name="manufacturer" 
                              component="div" 
                              className="invalid-feedback" />
                              </div>
                                 
        
                            <div className="form-group">
                            <label htmlFor="price">Price</label>
                              <Field type="number"  
                              name="price"  
                              className={'form-control' + (formik.errors.price && formik.touched.price ? ' is-invalid' : '')}
                             placeholder="Enter Product Price" />
                            <ErrorMessage 
                              name="price" 
                              component="div" 
                              className="invalid-feedback" />
                              </div>
                                 
                                 
                            <div className="form-group">
                            <label htmlFor="qty" >Quantity</label>
                          <Field type="number" 
                            name="qty"  
                            className={'form-control' + (formik.errors.qty && formik.touched.qty ? ' is-invalid' : '')}
                            placeholder="Enter Product Quantity"/>
                           <ErrorMessage 
                            name="qty" 
                            component="div" 
                            className="invalid-feedback" />
                            </div>
                                
                    
                            <div className="form-group">
                            <button type="submit"  
                              className="btn btn-primary"  
                              disabled={!formik.isValid || formik.isSubmitting}
                              >Submit</button>
                  
                            <button type="reset" 
                            className="btn btn-dark"
                            >Close</button>
                            </div>
                                 
                  </Form>
                </div>
            </div>
          </div>
        </div>

        )
      }}

</Formik>

)
}


export default ProductForm