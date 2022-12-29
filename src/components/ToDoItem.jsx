import React from 'react'
import { HiCheckCircle } from "react-icons/hi2";
import { IoMdExit } from "react-icons/io";

import '../styles/ToDoItem.css'

export const ToDoItem = (props) => {

  return (
    <li className='ToDoItem'>
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete}><HiCheckCircle fill='currentColor' className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}/></span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span className="Icon Icon-delete" onClick={props.onDelete}>
          <IoMdExit />
        </span>
    </li>
  )
}


