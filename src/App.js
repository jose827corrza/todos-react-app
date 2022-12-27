
import './App.css';

import React, { useContext } from "react";

import { ToDoSearch } from '../src/components/ToDoSearch'
import { ToDoCounter } from '../src/components/ToDoCounter'
import { ToDoList } from '../src/components/ToDoList'
import { CreateToDoButton } from '../src/components/CreateToDoButton'
import { ToDoItem } from '../src/components/ToDoItem'
import { ToDoContext } from './ToDoContext'
import { Modal } from './components/Modal';
import { ToDoForm } from './components/ToDoForm';



function App() {
  const { loading,
    error,
    completedTodos,
    totalTodos,
    completeToDo,
    deleteToDo,
    setSearchValue,
    searchedToDos,
    searchValue,
    openModal,
    setOpenModal, } = useContext(ToDoContext);
  return (
      <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
          <ToDoList>
          {error && <p>Desespérate, hubo un error...</p>}
            {/* // Mostramos un mensaje de cargando, cuando la aplicación está cargando lo sdatos */}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {/* // Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
            {(!loading && !searchedToDos.length) && <p>¡Crea tu primer TODO!</p>}
            {searchedToDos.map(todo => (
              <ToDoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.isComplete}
                onComplete={() => completeToDo(todo.text )}
                onDelete={() => deleteToDo(todo.text)} />
            ))}
            {!!openModal && (
              <Modal>
                <ToDoForm />
              </Modal>
            )}
          </ToDoList>     
      <CreateToDoButton />
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
export default App;
