import React from 'react'
import {connect} from 'react-redux';
import Product from './product.component'
import SearchBox from '../../components/searchbox.component'
import {  Button, Container, Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';

class ProductList extends React.Component {
    constructor(props){
        super(props)
        this.state={
          searchfield:''
        }
    }

    onSearchChange  = (event) => {
      this.setState({searchfield : event.target.value})

    }

 

    render() {

      const {searchfield} =this.state
      const {products} = this.props
      const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchfield.toLowerCase());
      })
        return(
            <Container >
                    <h1>Product Inventory</h1>
                    <br/><br/>
               <Row>
                    

                    <SearchBox searchChange={this.onSearchChange}/>

                    <Col md={3}>
                    <Button onClick={() => this.props.history.push('/products/add')}>Add New Product</Button>
                    </Col>

                    <Col md={3}>
                    <Button>Delete Selected</Button>
                    </Col>

                    <Col md={3}>
                    <Button>Customize View</Button>
                    </Col>
                </Row>
                <br/><br/>
                  <Product products={filteredProducts} {...this.props}/>
            </Container> 
            
        )
    }
}

function mapStateToProps(state)  {
  
    return {
      products : state.products
    };  
    
  }

export default withRouter(connect(mapStateToProps)(ProductList))