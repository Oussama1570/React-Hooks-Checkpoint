import React from 'react';
import {Form} from 'react-bootstrap';

const FilterName = ({inputSearch, setInputSearch }) => {
   return ( 
    <div className='BarFilter'>

<Form.Control

type='text'
placeholder='Enter Movie Title'
value={inputSearch}
onChange = {(e) => setInputSearch(e.target.value)}

/>

</div> 



  );
};

export default FilterName;
