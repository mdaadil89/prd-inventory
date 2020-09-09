import React from 'react'
import { withFormik, Form, Field, ErrorMessage  } from 'formik'
import uuid from 'uuid/v4' ;
import * as Yup from 'yup'

const ProductForm = ({ staus, errors, touched, isSubmitting }) => ( 
    

                <div>
                <Form >
                         <div className="form-group">
                            <label htmlFor="name" >Product Name  </label> 

                            <Field type="text"  name="name" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')}
                             placeholder="Enter Product Name" />
                             <ErrorMessage name="name" component="div" className="invalid-feedback" />

                            </div>
                       
                         <div className="form-group">
                           <label htmlFor="desc" >Product description</label>

                          <Field type="text"  name="desc" className={'form-control' + (errors.desc && touched.desc ? ' is-invalid' : '')}
                            placeholder="Enter Product Description" />
                          <ErrorMessage name="desc" component="div" className="invalid-feedback" />

                          </div>
                        

                        <div className="form-group">
                            <label htmlFor="manu">Manufacturer</label>

                            <Field type="text" name="manu" className={'form-control' + (errors.manu && touched.manu ? ' is-invalid' : '')}
                             placeholder="Enter Product Manufacturer" />
                            <ErrorMessage name="manu" component="div" className="invalid-feedback" />

                            </div>
                         

                         <div className="form-group">
                            <label htmlFor="price">Price</label>

                            <Field type="number"  name="price"  className={'form-control' + (errors.price && touched.price ? ' is-invalid' : '')}
                            placeholder="Enter Product Price" />
                            <ErrorMessage name="price" component="div" className="invalid-feedback" />

                            </div>
                         
                         
                         <div className="form-group">
                                  <label htmlFor="qty" >Quantity</label>

                                  <Field type="number" name="qty"  className={'form-control' + (errors.qty && touched.qty ? ' is-invalid' : '')}
                                    placeholder="Enter Product Quantity"/>
                                  <ErrorMessage name="qty" component="div" className="invalid-feedback" />

                                  
                        </div>
                        


                        <div className="form-group">
                        <button type="submit"  className="btn btn-primary"  disabled={isSubmitting}  >Submit</button>
                            
                        <button type="button" className="btn btn-dark"  >Close</button>
                        </div>
                         
                </Form>
                </div>     
)


const FormikProductForm = withFormik({

      
        mapsPropsToValues({prdname,prddesc,prdmanu,prdprc,prdqty}){
            return {
                name: prdname || '',
                desc: prddesc || '',
                manu: prdmanu || '',
                price: prdprc || 0,
                qty: prdqty || 0
            }
        },

        validationSchema: Yup.object().shape({
            name: Yup.string()
            .min(3, 'Product Name must be at least 3 characters')
            .required('Product Name is required'),

            desc: Yup.string()
            .min(3, 'Description must be at least 3 characters')
            .required('Description is required'),

            manu: Yup.string()
            .min(3, 'Manufacturing must be at least 3 characters')
            .required('Manufacturing is required'),

            price : Yup.number()
            .required('Price is required'), 

            qty : Yup.number()
            .required('Quantity is required')



        }),

        handleSubmit(values, { props, resetForm, setSubmitting }) {
            console.log(values);
            let prod ={id:  uuid() , ...values}
            props.addMyProduct(prod)
            setSubmitting(false);
             console.log(prod);
             props.history.push('/products/')

        }

})(ProductForm)

export default FormikProductForm