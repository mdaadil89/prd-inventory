import React from 'react'
import ProductApi from '../../data/product.api'
import ProductView from '../../components/products/productView.component'

class ViewPage extends  React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            product:{}
        }
    }

    componentDidMount(){
    const { history, match } = this.props
    let id = match.params
    console.log('In DidMount of View')
       ProductApi.getProduct(id).then(res =>  this.setState( {product: res} )
       )
   
   
    }

    render(){
        return(
            <div>
            <ProductView prod={this.state. product} {...this.props} />
        </div>
        )
        

    }
}

export default ViewPage
