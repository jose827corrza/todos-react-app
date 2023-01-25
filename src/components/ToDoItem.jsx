import React from 'react'
import { useNavigate} from 'react-router-dom'
import { HiCheckCircle } from "react-icons/hi2";
import { IoMdExit } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";

import '../styles/ToDoItem.css'

export const ToDoItem = (props) => {

  const navigate = useNavigate();

  const edit = () => {
    console.log(props.id);
    navigate(`/todo/${props.id}`)
  }

  return (
    <li className='ToDoItem'>
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete}><HiCheckCircle fill='currentColor' className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}/></span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span className="Icon Icon-edit" onClick={edit}>
          <AiFillEdit size={36}/>
        </span>
        <span className="Icon Icon-delete" onClick={props.onDelete}>
          <IoMdExit size={36}/>
        </span>
    </li>
  )
}


