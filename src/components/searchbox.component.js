import React from 'react';
import { Col } from 'react-bootstrap'

const SearchBox = ({ searchChange }) => {
    return (
    <Col md={3}>
        <input type='search' name="filter" 
        placeholder='search products'
         onChange={searchChange}/>
    </Col>
    );
  }
  
  export default SearchBox;