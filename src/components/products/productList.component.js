import React from 'react'
import {connect} from 'react-redux';
import Product from './product.component'
import * as prodActions from '../../redux/products/actions/products.action'
import SearchBox from '../../components/searchbox.component'
import {  Button, Container, Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';


class ProductList extends React.Component {
    constructor(props){
        super(props)
        this.state={
          searchfield:''
        }
        this.id=[];
    }

    onSearchChange  = (event) => {
      this.setState({searchfield : event.target.value})
    }

    addId(id){
      
      if(this.id.find(x=>x===id))
       {
        this.id.splice(this.id.indexOf(id),1)
       }
       else{
        this.id.push(id);
       }
     console.log('Id list', this.id)
    }

    deleteSelected(){
 
    
      this.props.deleteSelected(this.id)
          if(this.id.length===1)
        
          alert('Selected product is deleted!');
          else
          alert('Selected prodcuts are deleted!');
      
        this.id=[]
    }
    render() {

      const {searchfield} =this.state
      const {products} = this.props
      const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      // console.log('Filtered Products',filteredProducts )

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
                    <Button onClick={() => this.deleteSelected()}>Delete Selected</Button>
                    </Col>

                    <Col md={3}>
                    <Button>Customize View</Button>
                    </Col>
                </Row>
                <br/><br/>
                <Product products={filteredProducts} match = {this.props.match} onchange={(id) => { this.addId(id)}} />
                  {/* <Product products={this.props.products} onchange={(id) => { onchange(id)}}/> */}
            </Container> 
            
        )
    }
}

function mapStateToProps(state)  {
  
  // const {products } = (state && state.products) || [] ;
  //  console.log("state = "+ JSON.stringify(state, null, 4))
  //  console.log("products ="+ JSON.stringify(products, null, 4)) 
    return {
      products : state.products
    };  
    
  }

  function mapDispatchToProps(dispatch) {
    return {
      deleteSelected: (ids) => { dispatch(prodActions.deleteProduct(ids)); },
     // editMyProduct: (prod , id) => { dispatch(prodActions.editProduct(prod, id)) ; }

    };
  }

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProductList))