import React from 'react'

import '../styles/ChangeAlert.css'
import { withStorageListener } from '../ToDoContext/withStorageListener';

export const ChangeAlert = ({ show, toggleShow }) => {
  if (show) {
    return (
      <div className='ChangeAlert-bg'>
        <div className='ChangeAlert-container'>
          <p>It seems that your TODOS were changed in another window</p>
          <p>Do you want to reload them?</p>
          <button
            className='TodoForm-button TodoForm-button-add'
            onClick={() => toggleShow(false)}
          >
            Refresh the TODOS
          </button>
        </div>
      </div>
    )
  }
}

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)
