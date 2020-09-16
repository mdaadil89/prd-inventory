import React from 'react';
import {Card , Button, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Product = ({products, match}) => {
    console.log(products);
    //products = Array.from(products);
    

    const addId = (props,event,id) => {
        props.onchange(event.target.value);
    }
    
    return (
        <Row>
            
        { 
        products && products.map( product => 
                    <Col key={product.id}  md={4}>
                        <Card   border="primary" key={product.id}  style={{marginBottom: '15px'}}>
                        <Card.Header><input type='checkbox' onChange={(id)=>addId(product.id)} style={{align:"left"}} />  <b >{product.name}</b></Card.Header>
                            <Card.Body>
                            <br/>
                                <b>{product.description}</b><br/>
                                <b>Made by {product.manufacturer}</b><br/>
                                <b>Rs. {product.price}</b><br/>
                                <b>Qty : {product.qty}</b><br/>
                               < Link style={{margin: "5px 5px"}} className ="btn  text-white btn-primary" to={`edit/`+product.id}>Edit</Link>
                             <Link  style={{margin: "5px 5px"}} className ="btn  text-white btn-primary"  to={`${match.url}/`+product.id} >View Detail</Link>
                            </Card.Body>  
                         </Card> 
                     </Col> )
        } </Row>
    )
}

export default Product