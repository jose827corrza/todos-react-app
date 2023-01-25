import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

import '../styles/ToDoPage.css';
import { ToDoContext } from '../ToDoContext';

export const TodoPage = () => {
  const { addToDo, editToDo, findInfo} = useContext(ToDoContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [newToDoValue, setNewToDoValue] = useState('');
  const isNew = id ? false : true;

  useEffect(() => {
    if(isNew){
      setNewToDoValue('')
    } else {
      const todoInfo = findInfo(id)
      setNewToDoValue(todoInfo.text)
    }
  }, [id])

  const onSubmit = (event) => {
    event.preventDefault();
    if (isNew) {
      addToDo(newToDoValue);
      navigate('/');
    } else {
      editToDo(id, newToDoValue);
      navigate('/');
    }
  };

const onWrite = (event) => {
  setNewToDoValue(event.target.value)
};

const onCancel = () => {
  console.log('cancelado');
  navigate('/');
};

  return (
    <React.Fragment>
      <h2 className='ToDoName'>Dealing<br/>Tasks</h2>
        <form onSubmit={onSubmit}>
          <label>{isNew ? 'Type your new task !!' : 'Edit your created task'}</label>
          <textarea
            value={newToDoValue}
            onChange={onWrite}
          ></textarea>
          {/* <div className='TodoForm-buttonContainer'> */}
          <div className='TodoForm-buttonContainer'>
            <button
              type='button'
              onClick={onCancel}
              className='TodoForm-button TodoForm-button--cancel'
              // className='TodoForm-button TodoForm-button--cancel'
            >Cancel</button>
            <button
              type='submit'
              className='TodoForm-button TodoForm-button-add'
              // className='TodoForm-button TodoForm-button-add'
            >{isNew ? 'Create your new task' : 'Update your task'}</button>
          </div>
        </form>
    </React.Fragment>
  )
}
