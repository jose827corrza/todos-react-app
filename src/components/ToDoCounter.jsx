import React, { useContext } from 'react'

import { ToDoContext } from '../ToDoContext';

import '../styles/ToDoCounter.css';

// {total, completedTodos}
const ToDoCounter = () => {
  const {totalTodos, completedTodos} = useContext(ToDoContext)
  return (
    <div className='ToDoCounter'>Has Completado {completedTodos} de {totalTodos} tareas</div>
  )
}

export { ToDoCounter } ;