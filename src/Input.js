import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { FormContext } from './contexts/formContext';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const Input = () => {
  const {
    productId,
    setProductId,
    productName,
    setProductName,
    date,
    setDate,
  } = useContext(FormContext);

  ///// prevSearchParam = searchParamSelection
  ///// if prevSearchParam === 'product id' (clear productID at the top)

  const userChoice = '';

  const [searchParamSelection, setSearchParamSelection] = useState(userChoice);
  const prevUserChoiceRef = useRef(userChoice);
  const [searchInput, setSearchInput] = useState('');
  const [currentProductId, setCurrentProductId] = useState('');

  //   console.log('last choice', prevUserChoiceRef.current)

  useEffect(() => {
    prevUserChoiceRef.current = searchParamSelection;
  }, [searchParamSelection]); //run this code when the value of count changes

  const handleSearchParamChange = (event) => {
    setSearchParamSelection(event.target.value);
    setSearchInput(''); // Reset input whenever criteria changes
    if (prevUserChoiceRef.current === 'product id') {
      setCurrentProductId('');
      setProductId(''); // Reset product ID whenever criteria changes
    }
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    if (searchParamSelection === 'product id' && searchInput.length > 0) {
      setCurrentProductId(searchInput);
      setProductId(currentProductId);
    }
  }, [searchParamSelection, searchInput]);

  //   useEffect(() => {
  //     if (searchParamSelection === 'product id') {
  //       setProductId(currentProductId);
  //     }
  //   }, [searchParamSelection, setProductId, currentProductId]);

  //   useEffect(() => {
  //     if (searchParamSelection === 'product id') {
  //       setCurrentProductId(searchInput); // Set productId based on searchInput value
  //       setProductId(currentProductId);
  //     }
  //   }, [searchParamSelection, setProductId, searchInput]);

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
      Now: {searchParamSelection}, before: {prevUserChoiceRef.current}
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
      {searchParamSelection === 'product name' ||
      searchParamSelection === 'product id' ||
      searchParamSelection === '' ? (
        <InputGroup className="search-input-group">
          <FaSearch className="search-icon position-absolute z-1" />
          <Form.Control
            disabled={searchParamSelection === ''}
            onChange={handleInputChange}
            value={searchInput}
            className="search-input position-relative ps-5"
            placeholder={promptText}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      ) : (
        <DateRangePicker
          className="date-picker"
          onChange={handleDatePickerChange}
        />
      )}
    </div>
  );
};

export default Input;
