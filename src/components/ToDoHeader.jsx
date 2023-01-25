import React from 'react'

export const ToDoHeader = ({ children, loading }) => {
  return (
    <header>
        {/* {children} */}
        {React.Children.toArray(children).map(child => React.cloneElement(child, { loading}))}
    </header>
  )
}
