import React from 'react';
import { Form } from 'react-bootstrap';

const FilterName = (inputSearch, setInputSearch) => {
  return (
    <div>
        
      <Form.Control type="text"
       placeholder='Enter email'
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)} />
    </div>
  )
}

export default FilterName
