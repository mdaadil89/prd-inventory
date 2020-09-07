import React from 'react';
import {connect} from 'react-redux';
import * as prodActions from '../../redux/products/actions/products.action'
import FormikAddProductForm from './productform.component'

class ProductAddEdit extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <FormikAddProductForm />
        );
    }
}
    function mapDispatchToProps(dispatch) {
        return {
          addMyProduct: (prod) => { dispatch(prodActions.addProduct(prod)); }
        };
      }
    
    export default connect(null, mapDispatchToProps)(FormikAddProductForm)
