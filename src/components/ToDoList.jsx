import React from 'react'

import '../styles/ToDoList.css'

export const ToDoList = (props) => {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  )
}
