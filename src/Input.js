import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Form, InputGroup, Button } from 'react-bootstrap';

const Input = () => {
    const [searchParamSelection, setSearchParamSelection] = useState('')

  return (
    <div className="d-flex gap-3 mt-5">
        <div>
        <h5>Select search criteria </h5>
      <Form.Select
        className="search-by-dropdown"
        // onChange={(e) => setSearchParam(e.target.value)}
        aria-label="Default select example"
      >
        <option value="name">name</option>
        <option value="id">id</option>
        <option value="product">product</option>
      </Form.Select>
      </div>
      

      <InputGroup className="search-input-group">
        <FaSearch className="search-icon position-absolute z-1" />
        <Form.Control
          //   onChange={(e) => setSearchInput(e.target.value)}
          //   value={searchInput}
          className="search-input position-relative ps-5"
          placeholder="Type something..."
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
  );
};

export default Input;
