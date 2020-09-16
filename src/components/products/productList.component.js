import React from 'react'
import {connect} from 'react-redux';
import Product from './product.component'
import * as prodActions from '../../redux/products/actions/products.action'

import {  Button, Container, Row, Col } from 'react-bootstrap'

class ProductList extends React.Component {
    constructor(props){
        super(props)
        this.id=[];
    }


    addId(id){
      
      if(this.id.find(x=>x==id))
       {
        this.id.splice(this.id.indexOf(id),1)
       }
       else{
        this.id.push(id);
       }
      console.log(this.child.selected);
       if (this.id.length===0)
 
       this.child.selected=true;
       
       else
       this.child.selected=false;
        
       console.log(this.child.selected);
    }

    deleteSelected(event){
 
      // console.log("In delete selected");
      // console.log(event);
  
      if(event == "true")
      {
        
    
         // this.productsService.removeProduct(this.id);
         // this.productsService.getProducts().subscribe((data:any[]) => this.getData())
  
          if(this.id.length==1)
          alert('Selected prodcut is deleted!');
          else
          alert('Selected prodcuts are deleted!');
      }

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
                  <Product products={this.props.products} onchange={(id) => { onchange(id)}}/>
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

  function mapDispatchToProps(dispatch) {
    return {
      deleteSelected: (prod,id) => { dispatch(prodActions.deleteProduct(prod)); },
     // editMyProduct: (prod , id) => { dispatch(prodActions.editProduct(prod, id)) ; }

    };
  }

export default connect(mapStateToProps,mapDispatchToProps)(ProductList)