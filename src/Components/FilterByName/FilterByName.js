import React from 'react'
import {Form} from 'react-bootstrap'
import './FilterByName.css';


const FilterByName = ({inputSearch, setInputSearch}) => {
    return (
        <div>
            <Form.Control 
                type="text" placeholder="Enter movie title .." 
                className='filter-name'
                onChange={(e) => setInputSearch(e.target.value)}
                value={inputSearch}
            />
        </div>
    )
}

export default FilterByName

