import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useEffect, useState } from "react";

function App() {
  // let todos=[
  //   'Go to the Gym',
  //   'Pick up the kids from school',
  //   'hello'
  // ]

  const [todos, setTodos] = useState(() => {
    const localTodos = localStorage.getItem("todos");
    if (!localTodos)
      return [];
    return JSON.parse(localTodos);
  });
  const [todoValue, setTodoValue] = useState("")

  // useEffect(() => {
  //   const localTodos = localStorage.getItem("todos");
  //   if (localTodos) {
  //     setTodos(JSON.parse(localTodos));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    });
    setTodos(newTodoList);
  }
  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }



  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
    </>
  )
}
export default App;

// import TodoInput from "./components/TodoInput";
// import TodoList from "./components/TodoList";
// import { useEffect, useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [todoValue, setTodoValue] = useState("");

//   // Load todos from localStorage when the component mounts
//   useEffect(() => {
//     const localTodos = localStorage.getItem("todos");
//     if (localTodos) {
//       setTodos(JSON.parse(localTodos));  // Set the todos from localStorage
//     }
//   }, []); // This runs only once when the component mounts

//   // Save todos to localStorage whenever they change
//   useEffect(() => {
    
//       localStorage.setItem("todos", JSON.stringify(todos));  // Save to localStorage

//   }, [todos]);  // This runs whenever the todos state changes

//   function handleAddTodos(newTodo) {
//     const newTodoList = [...todos, newTodo];
//     setTodos(newTodoList);
//   }

//   function handleDeleteTodo(index) {
//     const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);
//     setTodos(newTodoList);
//   }

//   function handleEditTodo(index) {
//     const valueToBeEdited = todos[index];
//     setTodoValue(valueToBeEdited);
//     handleDeleteTodo(index);
//   }

//   return (
//     <>
//       <TodoInput
//         handleAddTodos={handleAddTodos}
//         todoValue={todoValue}
//         setTodoValue={setTodoValue}
//       />
//       <TodoList
//         todos={todos}
//         handleDeleteTodo={handleDeleteTodo}
//         handleEditTodo={handleEditTodo}
//       />
//     </>
//   );
// }export default App;
