
import '../App.css';

import React, { useContext } from "react";

import { ToDoHeader } from '../components/ToDoHeader'
import { ToDoSearch } from '../components/ToDoSearch'
import { ToDoCounter } from '../components/ToDoCounter'
import { ToDoList } from '../components/ToDoList'
import { CreateToDoButton } from '../components/CreateToDoButton'
// import { CreateToDoButton } from '../src/components/CreateToDoButton'
import { ToDoItem } from '../components/ToDoItem'
import { ToDoContext } from '../ToDoContext'
import { ToDosEmpty } from '../components/ToDosEmpty';
import { ToDosError } from '../components/ToDosError';
import { ToDosLoading } from '../components/ToDosLoading';
// import { Footer } from './components/Footer'
import { ChangeAlertWithStorageListener } from '../components/ChangeAlert'



function HomePage() {
  const { loading,
    error,
    completeToDo,
    deleteToDo,
    editTodo,
    searchedToDos,
    searchValue,
    setSearchValue,
    totalTodos,
    syncronizeTodos,
    completedTodos } = useContext(ToDoContext);
  return (
      <React.Fragment>
      <ToDoHeader
        loading={loading}
      >
        <ToDoCounter 
          totalTodos={totalTodos} 
          completedTodos={completedTodos} 
          // loading={loading} 
          />
        <ToDoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
          // loading={loading}
          />
      </ToDoHeader>
          <ToDoList
            error={error}
            loading={loading}
            searchText={searchValue}
            searchedTodos={searchedToDos}
            onError={() => <ToDosError />}
            onLoading={() => <ToDosLoading />}
            onEmpty={() => <ToDosEmpty />}
            onEmptySearchResults={(searchText) => <p>There are no results for {searchText}</p>}
            totalTodos={totalTodos}
            render={todo => (
              <ToDoItem 
              key={todo.id}
              id={todo.id} 
              text={todo.text}
              completed={todo.isComplete}
              onComplete={() => completeToDo(todo.id )}
              onDelete={() => deleteToDo(todo.id)}
              onEdit={() => editTodo(todo.id, todo.isComplete)}
              />
            )}
            // Esto de aca arriba reemplaza la parte de abajo, arriba se usa render props, 
            // en ccristiano es enviar funciones en lugar de variables por los props
          >
            {/* De aca para abajo es composicion de componentes bien aplicada, app puede compartir
            el estado directamente con sus comp nietos. Si los llama el mismo, para esto
            el padre debe recibir ese prop puntual llamado children, para
            que lo que esta siendo llamado por el pueda recibir de quien engendra 
            a en este caso al padre */}

            {/* --ESTO -- */}
          {/* {error && <ToDosError error={error} />}
            {/* // Mostramos un mensaje de cargando, cuando la aplicación está cargando lo sdatos */}
            {/* {loading && <ToDosLoading />} */}
            {/* // Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
            {/* {(!loading && !searchedToDos.length) && <ToDosEmpty />} */}
            {/* {searchedToDos.map(todo => ( */}
              {/* <ToDoItem  */}
                {/* key={todo.text} 
                text={todo.text}
                completed={todo.isComplete}
                onComplete={() => completeToDo(todo.text )}
                onDelete={() => deleteToDo(todo.text)} /> */}
            {/* ))} */}
          </ToDoList>  
          {/* <Footer />    */}
      <CreateToDoButton />
      <ChangeAlertWithStorageListener
        syncronize={syncronizeTodos} />
    </React.Fragment>
    // IMPORTANTISIMO envolver a todo los componente que vayan a consumir envolverlos en el producer, por amor a Odin
    // <ToDoProvider>
    //   <React.Fragment>
    //   <ToDoCounter />
    //   <ToDoSearch />
    //   <ToDoContext.Consumer>
    //     {({loading, error, openModal, completeToDo, deleteToDo, searchedToDos}) => (
    //       <ToDoList>
    //       {error && <p>Desespérate, hubo un error...</p>}
    //         {/* // Mostramos un mensaje de cargando, cuando la aplicación está cargando lo sdatos */}
    //         {loading && <p>Estamos cargando, no desesperes...</p>}
    //         {/* // Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
    //         {(!loading && !searchedToDos.length) && <p>¡Crea tu primer TODO!</p>}
    //         {searchedToDos.map(todo => (
    //           <ToDoItem 
    //             key={todo.text} 
    //             text={todo.text}
    //             completed={todo.isComplete}
    //             onComplete={() => completeToDo(todo.text )}
    //             onDelete={() => deleteToDo(todo.text)} />
    //         ))}
    //         {/* <Modal>
    //           <p>Teletp mi rey /{openModal} !!</p>
    //         </Modal> */}
    //       </ToDoList>
          
    //     )}
        
    //   </ToDoContext.Consumer>
      
    //   <CreateToDoButton />
    // </React.Fragment>
    // </ToDoProvider>
  );
  
}
// const defaultTodos = [
//   {
//     nombre: "Primer todo react",
//     isComplete: false,
//     text: "Texto de tarea",
//     completed: true,
//   },
//   {
//     nombre: "Segundo todo react",
//     isComplete: false,
//     text: "Texto de matematicas",
//     completed: true,
//   },
//   {
//     nombre: "tercer todo react",
//     isComplete: false,
//     text: "Texto de fisica",
//     completed: true,
//   },
//   {
//     nombre: "cuarto todo react",
//     isComplete: false,
//     text: "Texto de fisica 2",
//     completed: true,
//   },
// ]
export default HomePage;
