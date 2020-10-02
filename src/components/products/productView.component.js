import React from 'react'

import { Card } from 'react-bootstrap'

const ProductView = (props) => {
 const {prod,history} = props
   

    return (
      <div style={{ justifyContent: "centre"}}>
        <Card  border="primary" style={{ width: '20rem', margin: '0 auto', float: 'none', marginBottom: '10px' }}>
                        <Card.Header><b >{prod?.name}</b></Card.Header>
                            <Card.Body>
                            <br/>
                                <b>{prod?.description}</b><br/>
                                <b>Made by {prod?.manufacturer}</b><br/>
                                <b>Rs. {prod?.price}</b><br/>
                                <b>Qty : {prod?.qty}</b><br/> 
                            </Card.Body>  
                            <button  className="btn btn-success" onClick={()=> history.push('/products')}>Go Back to List</button>
                         </Card> 
                         
                         </div>         
    )
}

export default ProductView