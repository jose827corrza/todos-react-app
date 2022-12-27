import React, { useContext } from 'react'

import '../styles/CreateToDoButton.css'
import { ToDoContext } from '../ToDoContext'

export const CreateToDoButton = () => {
  const { openModal, setOpenModal} = useContext(ToDoContext)
  const openModalClick = () => {
    setOpenModal(!openModal)
    console.log('boton');
    console.log(openModal);
  }
  return (
    <button className='CreateTodoButton' onClick={openModalClick}>+</button>
  )
}
