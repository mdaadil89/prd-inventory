import React from 'react';
import {Card , Button, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Product = ({products, match, onchange, viewobj }) => {
   
    const {pname,pdesc,pmanu,pprice,pqty} = viewobj || {}
    const addId = (id) => { 
        onchange(id); 
    }
     
    return ( 
        <Row>
            
        { 
        products && products.map( product => 
                    <Col key={product.id}  md={4}>
                        <Card   border="primary" key={product.id}  style={{marginBottom: '15px'}}>
                        <Card.Header><input type='checkbox' onClick={() =>addId(product.id)} style={{align:"left"}} />  {pname?<b >{product.name}</b>: <></>}</Card.Header>
                            <Card.Body>
                           
                                {pdesc?<b>{product.description}<br/></b>: <></>}
                                {pmanu?<b>Made by {product.manufacturer}<br/></b>: <></>}
                                {pprice?<b>Rs. {product.price}<br/></b>: <></>}
                                {pqty?<b>Qty : {product.qty}<br/></b>: <></>}
                               < Link style={{margin: "5px 5px"}} className ="btn  text-white btn-primary" to={`edit/`+product.id}>Edit</Link>
                             <Link  style={{margin: "5px 5px"}} className ="btn  text-white btn-primary"  to={`${match.url}/`+product.id} >View Detail</Link>
                            </Card.Body>  
                         </Card> 
                     </Col> )
        } </Row>
    )
}

export default Product