import React from 'react'
//import RegistrationForm from '../../components/registration/RegistrationForm.component'
import ProductAddEdit from '../../components/products/productAddEdit.component'

const ProductAddEditPage = () => (
        <div className="jumbotron">
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h3><center>Add New Product</center></h3>
                            <ProductAddEdit/>
                </div>
            </div>
        </div>
    </div>
)

export default ProductAddEditPage