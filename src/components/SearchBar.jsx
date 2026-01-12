import React from 'react'
import {FaSearch} from 'react-icons/fa'
import './SearchBar.css'
export const SearchBar = () => {
  return (
    <div className='input-wrapper'>
     <FaSearch className='search-icon'/>
     <input placeholder='Type to search...' type="search" className='search-input'/>
    </div>
  )
}
