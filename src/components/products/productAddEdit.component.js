import React from 'react';
import {connect} from 'react-redux';
import * as prodActions from '../../redux/products/actions/products.action'
import ProductForm from './productform.component'
import {withRouter} from 'react-router-dom'
import ProductApi from '../../data/product.api'

class ProductAddEdit extends React.Component {
    constructor(props){
        super(props)
         this.state={
             product : {}
         }
    }

    componentDidMount(){
        if (this.props.type==='Edit')
        {
             console.log(this.props.match.params)
            ProductApi.getProduct(this.props.match.params).then( res => {
                this.setState({product : res})
                console.log(res)
            }
            )
         }
    }

   
    
    render() {
        return (
            
            <ProductForm  product={this.state.product} {...this.props}   />
        )
    }
}
    function mapDispatchToProps(dispatch) {
        return {
          addMyProduct: (prod) => { dispatch(prodActions.addProduct(prod)); },
          editMyProduct: (prod , id) => { dispatch(prodActions.editProduct(prod, id)) ; }

        };
      }

    
export default withRouter(connect(null, mapDispatchToProps)(ProductAddEdit))
