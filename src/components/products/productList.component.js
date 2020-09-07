import React from 'react'
import {connect} from 'react-redux';
import Product from './product.component'

import {  Button, Container, Row, Col } from 'react-bootstrap'

class ProductList extends React.Component {
    constructor(props){
        super(props)
        
    }

    render() {
        return(
            <Container >
                    <h1>Product Inventory</h1>
                    <br/><br/>
               <Row>
                    <Col md={4}>
                    <label >Search Product :  </label>
                     <input type='text' name="filter" />
                    </Col>

                    <Col md={2}>
                    <Button>Add New Product</Button>
                    </Col>

                    <Col md={2}>
                    <Button>Delete Selected</Button>
                    </Col>

                    <Col md={2}>
                    <Button>Customize View</Button>
                    </Col>
                </Row>
                <br/><br/>
                  <Product products={this.props.products}/>
            </Container> 
            
        )
    }
}

function mapStateToProps(state)  {
  
  const {products } = (state && state.products) || [] ;
   console.log("state = "+ JSON.stringify(state, null, 4))
   console.log("products ="+ JSON.stringify(products, null, 4)) 
    return {
      products : state.products
    };  
    
  }

export default connect(mapStateToProps)(ProductList)