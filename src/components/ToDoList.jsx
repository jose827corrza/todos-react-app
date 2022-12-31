import React from 'react'

import '../styles/ToDoList.css'

export const ToDoList = (props) => {
  return (
    <section>
      {/* Esto hace parte de las render props  */}
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmpty()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
      {!props.loading && props.searchedTodos.map(props.render)}
      <ul>
        {props.children}
      </ul>
    </section>
  )
}
