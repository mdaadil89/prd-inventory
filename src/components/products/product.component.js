import React from 'react';
import {Card , Button, Row, Col } from 'react-bootstrap'

const Product = ({products}) => {
    return (
        <Row>
        { products.map( product => 
                    
            <Col key={product.id}  md={4}>
        <Card   key={product.id} >
        <Card.Header><input type='checkbox' style={{align:"left"}} />  <b >{product.name}</b></Card.Header>
            <Card.Body>
            <br/>

                <b>{product.description}</b><br/>
                <b>Made by {product.manufacturer}</b><br/>
                <b>Rs. {product.price}</b><br/>
                <b>Qty : {product.qty}</b><br/>
            
            
            <Button variant="primary" style={{ margin:  "10px"}}>Edit</Button>
            <Button  variant="primary">View Detail</Button>
           
        </Card.Body>  
    </Card> </Col> )
        } </Row>
    )
}

export default Product