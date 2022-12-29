import React, { useContext } from 'react'

import { ToDoContext } from '../ToDoContext';

import '../styles/ToDoCounter.css';

// {total, completedTodos}
const ToDoCounter = () => {
  const {totalTodos, completedTodos} = useContext(ToDoContext)
  const promedioTodos = Math.round((completedTodos/totalTodos)*100);
  return (
    <React.Fragment>
      <h2 className="TodoCounter">Dealing<br/>Tasks</h2>
            <span className="TodoCounterIndicator">
                <span className="TodoCounterLevel" style={{width:promedioTodos+'%'}}></span>
                <p className="TodoCounterText">{promedioTodos}%</p>
            </span>
            <p className="TodoCounterleyenda">{completedTodos} de {totalTodos}</p>
    </React.Fragment>
    // <div className='ToDoCounter'>Has Completado {completedTodos} de {totalTodos} tareas</div>
  )
}

export { ToDoCounter } ;