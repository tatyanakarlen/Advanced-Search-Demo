import logo from './logo.svg';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FormContext } from './contexts/formContext';
import Input from './Input';

import './App.css';

function App() {
  const [productId, setProductId] = useState('3'); 
  const [productName, setProductName] = useState(''); 
  const [date, setDate] = useState(''); 

  return (
    <div className="App">
      <h1>Advanced Search</h1>
      <FormContext.Provider value={{ productId, setProductId, productName, setProductName, date, setDate }}>
      <Form>
        <Input />
      </Form>
      </FormContext.Provider>
    </div>
  );
}

// function App() {

//   const [options, setOptions] = useState(['name', 'id', 'product']);
//   const [filteredOptions, setFilteredOptions] = useState([]);
//   const [selectedParams, setSelectedParams] = useState([]);
//   const [searchParam, setSearchParam] = useState('name');
//   const [searchInput, setSearchInput] = useState('');

//   useEffect(() => {
//     const filteredOptions = options.filter((option) => !selectedParams.includes(option));
//     setOptions(filteredOptions);
//   }, [selectedParams]);

//   console.log('filtered options', filteredOptions)
//   console.log('selectedParams', selectedParams)

//   useEffect(() => {
//     if (searchInput.trim().length > 0) {
//       setSelectedParams((prevParams) => {
//         const updatedParams = prevParams.includes(searchParam)
//           ? prevParams
//           : [...prevParams, searchParam];
//         return updatedParams;
//       });
//     } else {
//       setSelectedParams((prevParams) =>
//         prevParams.filter((param) => param !== searchParam)
//       );
//     }
//   }, [searchParam, searchInput]);

//   useEffect(() => {
//     setSearchInput('');

//   }, [searchParam]);

//   useEffect(() => {
//     const filteredOptions = options.filter(
//       (option) => !selectedParams.includes(option)
//     );
//     setFilteredOptions(filteredOptions);
//   }, [selectedParams]);

//   const isProductDisabled = filteredOptions.includes('product');

//   const [searchBySelectedOption, setSearchBySelectedOption] =
//     useState('Product ID');

//   const [selectedQueries, setSelectedQueries] = useState(1);
//   const [hasUserAddedQuery, sethasUserAddedQuery] = useState(false);

//   const [searchQuery1, setSearchQuery1] = useState('');
//   const [searchQuery2, setSearchQuery2] = useState('');
//   const [searchQuery3, setSearchQuery3] = useState('');

//   useEffect(() => {
//     if (selectedQueries > 1) {
//       sethasUserAddedQuery(true);
//     }
//   }, [selectedQueries]);

//   const handleAddQuery = () => {
//     if (selectedQueries < 3) {
//       setSelectedQueries(selectedQueries + 1);
//     }
//   };

//   useEffect(() => {
//     const updatedOptions = options.filter(
//       (option) => !selectedParams.includes(option)
//     );
//     setOptions(options);
//   }, [selectedParams, options]);

//   const handleRemoveQuery = (index) => {
//     if (selectedQueries > 1) {
//       setSelectedQueries((selectedQueries) => selectedQueries - 1);
//       switch (index) {
//         case 1:
//           searchQuery1('');
//           break;
//         case 2:
//           searchQuery2('');
//           break;
//         case 3:
//           searchQuery3('');
//           break;
//         default:
//           break;
//       }
//       // Check if updated selectedQuery is 1 and hasUserAddedQuery is true
//       if (selectedQueries === 2 && hasUserAddedQuery) {
//         sethasUserAddedQuery(false); // Reset hasUserAddedQuery to false
//       }
//     }
//   };

//   const handleInputChange1 = (e) => {
//     setSearchQuery1(e.target.value);
//   };

//   const handleInputChange2 = (e) => {
//     setSearchQuery2(e.target.value);
//   };

//   const handleInputChange3 = (e) => {
//     setSearchQuery3(e.target.value);
//   };

//   return (
//     <div className="p-5 w-75">
//       <h3>Trying input #1</h3>

//       <Form.Select
//         className="search-by-dropdown"
//         onChange={(e) => setSearchParam(e.target.value)}
//         aria-label="Default select example"
//       >
//         <option value="name">name</option>
//         <option value="id">id</option>
//         <option value="id" disabled={!isProductDisabled}>product</option>

//       </Form.Select>
//       <h1>Search param: {searchParam}</h1>

//       <InputGroup className="search-input-group">
//         <FaSearch className="search-icon position-absolute z-1" />
//         <Form.Control
//           onChange={(e) => setSearchInput(e.target.value)}
//           value={searchInput}
//           className="search-input position-relative ps-5"
//           placeholder="Type something..."
//           aria-label="Username"
//           aria-describedby="basic-addon1"
//         />
//       </InputGroup>

//       <h3 className="mt-5">Search by product</h3>

//       <div>
//         <div className="d-flex gap-3 align-items-center">
//           <div>
//             <InputGroup className="search-input-group">
//               <FaSearch className="search-icon position-absolute z-1" />
//               <Form.Control
//                 onChange={handleInputChange1}
//                 className="search-input position-relative ps-5"
//                 placeholder="Type something..."
//                 aria-label="Username"
//                 aria-describedby="basic-addon1"
//                 value={searchQuery1}
//               />
//             </InputGroup>
//           </div>
//           <div>
//             <Form.Label className="fw-semibold">
//               Search by (mandatory)
//             </Form.Label>
//             <Form.Select
//               className="search-by-dropdown"
//               onChange={(e) => setSearchBySelectedOption(e.target.value)}
//               aria-label="Default select example"
//             >
//               <option value="Product ID">Product ID</option>
//               <option value="Product Name">Product Name</option>
//               <option value="Date">Date</option>
//             </Form.Select>
//           </div>
//           {selectedQueries > 1 && hasUserAddedQuery ? null : (
//             <Button
//               disabled={searchQuery1.length <= 2}
//               className="add-search-btn"
//               onClick={handleAddQuery}
//             >
//               + Add
//             </Button>
//           )}
//         </div>
//       </div>

//       {selectedQueries === 2 && (
//         <div className="d-flex gap-3 align-items-center">
//           <div>
//             <InputGroup className="search-input-group">
//               <FaSearch className="search-icon position-absolute z-1" />
//               <Form.Control
//                 onChange={handleInputChange2}
//                 className="search-input position-relative ps-5"
//                 placeholder="Type something..."
//                 aria-label="Username"
//                 aria-describedby="basic-addon1"
//                 value={searchQuery2}
//               />
//             </InputGroup>
//           </div>
//           <div>
//             <Form.Label className="fw-semibold">
//               Search by (mandatory)
//             </Form.Label>
//             <Form.Select
//               className="search-by-dropdown"
//               onChange={(e) => setSearchBySelectedOption(e.target.value)}
//               aria-label="Default select example"
//             >
//               <option value="Product ID">Product ID</option>
//               <option value="Product Name">Product Name</option>
//               <option value="Date">Date</option>
//             </Form.Select>
//           </div>

//           {/* //// add logic here, if searchQuery2.length <= 2 && render a button that gives option to remove  */}
//           {searchQuery2.length >= 3 ? (
//             <Button variant="danger" onClick={handleRemoveQuery}>
//               Remove
//             </Button>
//           ) : (
//             <Button
//               disabled={searchQuery2.length <= 3}
//               className="add-search-btn"
//               onClick={handleAddQuery}
//             >
//               + Add
//             </Button>
//           )}
//         </div>
//       )}

//       {selectedQueries === 3 && (
//         <>
//           <div className="d-flex gap-3 align-items-center">
//             <div>
//               <InputGroup className="search-input-group">
//                 <FaSearch className="search-icon position-absolute z-1" />
//                 <Form.Control
//                   onChange={handleInputChange2}
//                   className="search-input position-relative ps-5"
//                   placeholder="Type something..."
//                   aria-label="Username"
//                   aria-describedby="basic-addon1"
//                   value={searchQuery2}
//                 />
//               </InputGroup>
//             </div>
//             <div>
//               <Form.Label className="fw-semibold">
//                 Search by (mandatory)
//               </Form.Label>
//               <Form.Select
//                 className="search-by-dropdown"
//                 onChange={(e) => setSearchBySelectedOption(e.target.value)}
//                 aria-label="Default select example"
//               >
//                 <option value="Product ID">Product ID</option>
//                 <option value="Product Name">Product Name</option>
//                 <option value="Date">Date</option>
//               </Form.Select>
//             </div>
//             <Button className="add-search-btn" onClick={handleAddQuery}>
//               + Add
//             </Button>
//           </div>
//           <div className="d-flex gap-3 align-items-center">
//             <div>
//               <InputGroup className="search-input-group">
//                 <FaSearch className="search-icon position-absolute z-1" />
//                 <Form.Control
//                   onChange={handleInputChange3}
//                   className="search-input position-relative ps-5"
//                   placeholder="Type something..."
//                   aria-label="Username"
//                   aria-describedby="basic-addon1"
//                   value={searchQuery3}
//                 />
//               </InputGroup>
//             </div>
//             <div>
//               <Form.Label className="fw-semibold">
//                 Search by (mandatory)
//               </Form.Label>
//               <Form.Select
//                 className="search-by-dropdown"
//                 onChange={(e) => setSearchBySelectedOption(e.target.value)}
//                 aria-label="Default select example"
//               >
//                 <option value="Product ID">Product ID</option>
//                 <option value="Product Name">Product Name</option>
//                 <option value="Date">Date</option>
//               </Form.Select>
//             </div>
//             <Button className="add-search-btn" onClick={handleAddQuery}>
//               + Add
//             </Button>
//           </div>
//         </>
//       )}

//       <Button className="mt-5">Search</Button>
//     </div>
//   );
// }

// export default App;

export default App;
