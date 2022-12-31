import React from 'react'

import '../styles/ToDoSearch.css'

// { searchValue, setSearchValue }
export const ToDoSearch = ({searchValue, setSearchValue, loading}) => {
  
  const onSearchChange = (event) => {
    // console.log(event.target.value);
    setSearchValue(event.target.value);
  }
  return (
    <input 
      className='ToDoSearch' 
      placeholder='Search for your task' 
      onChange={onSearchChange} 
      value={searchValue}
      disabled={loading}
      />
  )
}
