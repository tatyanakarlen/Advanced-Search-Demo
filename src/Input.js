import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { FormContext } from './contexts/formContext';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'


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
  const [searchInput, setSearchInput] = useState('');

  const handleSearchParamChange = (event) => {
    setSearchParamSelection(event.target.value);
  };

  useEffect(() => {
    setSearchInput('');
  }, [searchParamSelection]);

  const handleDatePickerChange = (value) => {
    setSearchInput(value?.toString() || ''); // Convert the value to a string
  };


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
          value={searchParamSelection}
        >
          <option value="">Select criteria</option>
          <option value="product name">name</option>
          <option value="product id">id</option>
          <option value="date">date</option>
        </Form.Select>
      </div>
      {  (searchParamSelection === "product name" || searchParamSelection === "product id" || searchParamSelection === "") ?
        <InputGroup className="search-input-group">
          <FaSearch className="search-icon position-absolute z-1" />
          <Form.Control
            disabled={searchParamSelection === ''}
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            className="search-input position-relative ps-5"
            placeholder={promptText}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        : <DateRangePicker className="date-picker" onChange={handleDatePickerChange}/>
      }
    </div>
  );
};

export default Input;
