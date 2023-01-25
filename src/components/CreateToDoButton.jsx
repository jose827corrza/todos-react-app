import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../styles/CreateToDoButton.css'

export const CreateToDoButton = () => {
  const navigate = useNavigate();
  return (
    <button className='CreateTodoButton' onClick={() => navigate('/todo')}>+</button>
  )
}
