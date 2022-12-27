import React, { useContext, useState } from 'react'

import { ToDoContext } from '../ToDoContext'

import '../styles/ToDoForm.css'

export const ToDoForm = () => {
    const { addToDo, openModal,setOpenModal } = useContext(ToDoContext);
    const [newToDoValue, setNewToDoValue] = useState('');
    const onCancel = () => {
        setOpenModal(!openModal);
    };
    const onWrite = (event) => {
        setNewToDoValue(event.target.value)
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (newToDoValue.length <= 0){
            return;
        }
        addToDo(newToDoValue);
        setOpenModal(!openModal);
    };
    const onKeyEnterPress = (event) => {
        if (event.charCode === 13){
            event.preventDefault();
            if (newToDoValue.length <= 0){
                return;
            }
            addToDo(newToDoValue);
            setOpenModal(!openModal);
        }
    };
  return (
    <form onSubmit={onSubmit} onKeyPress={onKeyEnterPress}>
        <label>...</label>
        <textarea 
            placeholder='Whats your next goal?'
            value={newToDoValue}
            onChange={onWrite}
            ></textarea>
        <div className='TodoForm-buttonContainer'>
            <button 
                type='button'
                onClick={onCancel}
                className='TodoForm-button TodoForm-button--cancel'>
                Cancel
            </button>
            <button 
                type='submit'
                className='TodoForm-button TodoForm-button-add'>
                Add
            </button>
        </div>
    </form>
  )
}
