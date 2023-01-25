import React from 'react'
import notFound from '../assets/notFound.png'
import '../styles/NotFound.css'

export const NotFound = () => {
  return (
    <div className='NotFound'>
        <img src={notFound} alt='not fount img'/>
    </div>
  )
}
