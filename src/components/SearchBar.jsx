import React,{useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import './SearchBar.css'
export const SearchBar = () => {
    const [input, setInput] = useState(''); 
    const fetchData = (value) => {
        console.log("Fetching data for query:", value);
        fetch(`https://jsonplaceholder.typicode.com/users`)
          .then(response => response.json())
          .then((data) => {
            const results = data.filter(user =>{
              return user && user.name && user.name.toLowerCase().includes(value.toLowerCase())
            }
            );
            console.log("Search results:", results);
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }
  return (
    <div className='input-wrapper'>
     <FaSearch className='search-icon'/>
     <input placeholder='Type to search...' type="search" className='search-input'
     value={input}
     onChange={(e)=>handleChange(e.target.value)}
     />
    </div>
  )
}
