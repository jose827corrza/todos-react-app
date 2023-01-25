import React from 'react'

import '../styles/ToDoCounter.css';

// {total, completedTodos}
const ToDoCounter = ({totalTodos, completedTodos, loading}) => {
  const promedioTodos = Math.round((completedTodos/totalTodos)*100);
  return (
    <React.Fragment>
      <h2 className={`TodoCounter ${!!loading && "ToDoCounter--loading"}`}>Dealing<br/>Tasks</h2>
            <span className="TodoCounterIndicator">
                <span className="TodoCounterLevel" style={{width:promedioTodos+'%'}}></span>
                <p className="TodoCounterText">{!!loading ? "0" : promedioTodos}%</p>
            </span>
            <p className="TodoCounterleyenda">{completedTodos} of {totalTodos}</p>
    </React.Fragment>
    // <div className='ToDoCounter'>Has Completado {completedTodos} de {totalTodos} tareas</div>
  )
}

export { ToDoCounter } ;