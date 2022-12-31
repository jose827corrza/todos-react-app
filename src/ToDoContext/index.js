import { createContext, useState } from "react";

import { useLocalStorage } from './useLocalStorage';

// Creas el contexto pa
const ToDoContext = createContext();

// Forma facil del useContext xd
// import { Contexto } from './direccionContexto/'

// const { value } = React.useContext(Contexto)

function ToDoProvider(props) {
// Tendremos que envolver nuestra app con esto, paara que todo quede en el contexto
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
        syncronizeItem: syncronizeTodos,
    } = useLocalStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);
    
    
    const completedTodos = todos.filter(todo => !!todo.isComplete).length; // es lo mismo a todo => todo.completed == true
    const totalTodos = todos.length;
    let searchedToDos = [];

    if (!searchValue.length >=1) {
        searchedToDos = todos;
    } else {
        console.log(searchedToDos);
        searchedToDos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
        })
    }

    const completeToDo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]; //no podemos trabajar sobre el state directamente
        newTodos[todoIndex].isComplete = !newTodos[todoIndex].isComplete; // es como un toogle
        saveTodos(newTodos);
    }
    
    const addToDo = (text) => {
        const newTodos = [...todos]; //no podemos trabajar sobre el state directamente
        newTodos.push({
            text,
            isComplete: false,
        })
        saveTodos(newTodos);
    }
    
    const deleteToDo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]; //no podemos trabajar sobre el state directamente
        console.log(newTodos[todoIndex]);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }
return (
    // Todas las propiedades que quiera compartir deben estar dentro de ese "value"
    <ToDoContext.Provider value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        completeToDo,
        deleteToDo,
        addToDo,
        setSearchValue,
        searchedToDos,
        searchValue,
        openModal,
        setOpenModal,
        syncronizeTodos,
    }}> 
        {props.children}
    </ToDoContext.Provider>
    )

}

export { ToDoContext, ToDoProvider };