import React, { useContext } from 'react'

import { ToDoContext } from '../ToDoContext';

import '../styles/ToDoSearch.css'

// { searchValue, setSearchValue }
export const ToDoSearch = () => {
  const {searchValue, setSearchValue} = useContext(ToDoContext);
  const onSearchChange = (event) => {
    // console.log(event.target.value);
    setSearchValue(event.target.value);
  }
  return (
    <input 
      className='ToDoSearch' 
      placeholder='Search for your task' 
      onChange={onSearchChange} 
      value={searchValue}/>
  )
}
