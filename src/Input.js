import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { FormContext } from './contexts/formContext';
import { DateRangePicker } from 'rsuite';

const Input = () => {
  const {
    productId,
    setProductId,
    productName,
    setProductName,
    date,
    setDate,
  } = useContext(FormContext);
  const [searchParamSelection, setSearchParamSelection] = useState('');

  const handleSearchParamChange = (event) => {
    setSearchParamSelection(event.target.value);
  };

  {
    /* <option value="product name">name</option>
          <option value="product id">id</option>
          <option value="date">date</option> */
  }

  //// for placeholder
//   let promptText = '';
//   if (searchParamSelection === 'product name') {
//     promptText = 'Enter product name';
//   } else if (searchParamSelection === 'product id') {
//     promptText = 'Enter product ID';
//   } else {
//     promptText = 'Choose criteria...';
//   }

const promptOptions = {
    'product name': 'Enter product name',
    'product id': 'Enter product ID',
    // Add more options as needed
  };
  
  let promptText = promptOptions[searchParamSelection] || 'Choose criteria...';

  return (
    <div className="d-flex gap-3 mt-5">
      <div>
        <h5>Search criteria </h5>
        <Form.Select
          className="search-by-dropdown"
          aria-label="Default select example"
          onChange={handleSearchParamChange}
        >
          <option value="">Select criteria</option>
          <option value="product name">name</option>
          <option value="product id">id</option>
          <option value="date">date</option>
        </Form.Select>
      </div>
      {
        <InputGroup className="search-input-group">
          <FaSearch className="search-icon position-absolute z-1" />
          <Form.Control
            disabled={searchParamSelection === ''}
            //   onChange={(e) => setSearchInput(e.target.value)}
            //   value={searchInput}
            className="search-input position-relative ps-5"
            placeholder={promptText}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      }
    </div>
  );
};

export default Input;
