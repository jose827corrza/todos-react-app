import React from 'react'

import '../styles/ToDosLoading.css'

export const ToDosLoading = () => {
  return (
    <div className='LoadingTodo-container'>
        <span className='LoadingTodo-completeIcon'></span>
        <p className='LoadingTodo-text'>We are requesting your ToDos don't go bananas</p>
        <span className='LoadingTodo-deleteIcon'></span>
    </div>
  )
}
