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
          searchfield:'',
          toggleView:false,
          togglefield:{
            pname:true,
            pdesc:true,
            pmanu:true,
            pprice:true,
            pqty:true
          }
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

    toggleCustView(){

      this.setState( prevState => prevState.toggleView = !prevState.toggleView)
    }

    deleteSelected(){
 
    
      if(this.id.length === 0)
      alert("Please Select Items for deletion")
      
         
      if(this.id.length===1)
          {
            alert('Selected product is deleted!');
          this.props.deleteSelected(this.id)
        }
          else if(this.id.length>1)
          {
            alert('Selected prodcuts are deleted!');
          this.props.deleteSelected(this.id)
          }
      
        this.id=[]
    }
    name() {
      this.setState( prevState => prevState.togglefield.pname = !prevState.togglefield.pname)
       }
 
desc() {
  this.setState( prevState => prevState.togglefield.pdesc = !prevState.togglefield.pdesc)
 }
 
manu () {
  this.setState( prevState => prevState.togglefield.pmanu = !prevState.togglefield.pmanu)
 }
 
price() {
  this.setState( prevState => prevState.togglefield.pprice = !prevState.togglefield.pprice)
}
 
qty() {
  this.setState( prevState => prevState.togglefield.pqty = !prevState.togglefield.pqty)
  }

    render() {

      const {searchfield} =this.state
      const {products, loggedIn} = this.props
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
                    <Button onClick={() => this.deleteSelected()} disabled={!loggedIn}>Delete Selected</Button>
                    </Col>

                    <Col md={3}>
                    <Button onClick={()=> this.toggleCustView()}>Customize View</Button>
                    </Col>
                </Row>
                <br/><br/>
               { this.state.toggleView?<Row>
                  
                  <div className="card" style={{width: "20rem"}}>
                <div className="card-header bg-dark text-white">UnCheck the column you want to hide</div>
        <div className="card-body">

          <p><input type="checkbox" checked={this.state.togglefield.pname} name="pname" onChange={()=>this.name()} className="card-text"  /> Product Name</p>
        <p><input type="checkbox" checked={this.state.togglefield.pdesc}  name="pdesc" onChange={()=>this.desc()} className="card-text"/> Description</p> 
        <p><input type="checkbox" checked={this.state.togglefield.pmanu}   name="pmanu" onChange={()=>this.manu()} className="card-text" /> Manufacturer</p>
        <p><input type="checkbox" checked={this.state.togglefield.pprice}  name="pprice" onChange={()=>this.price()} className="card-text"/> Price</p>
        <p><input type="checkbox" checked={this.state.togglefield.pqty}  name="pqty" onChange ={()=>this.qty() }className="card-text"/> Quantity</p> 
      </div></div>
                </Row> : <></>}
                <br/>
                <Product products={filteredProducts} match = {this.props.match} viewobj={this.state.togglefield} onchange={(id) => { this.addId(id)}} />
                  {/* <Product products={this.props.products} onchange={(id) => { onchange(id)}}/> */}
            </Container> 
            
        )
    }
}

function mapStateToProps(state)  {
  const { loggedIn } = state.authentication;
  // const {products } = (state && state.products) || [] ;
  //  console.log("state = "+ JSON.stringify(state, null, 4))
  //  console.log("products ="+ JSON.stringify(products, null, 4)) 
    return {
      products : state.products,
      loggedIn : loggedIn
    };  
    
  }

  function mapDispatchToProps(dispatch) {
    return {
      deleteSelected: (ids) => { dispatch(prodActions.deleteProduct(ids)); },
     // editMyProduct: (prod , id) => { dispatch(prodActions.editProduct(prod, id)) ; }

    };
  }

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProductList))