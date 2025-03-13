import React from 'react'
import Todocard from './Todocard'

function TodoList(props) {
  const {todos, handleDeleteTodo}=props;
  
  return (
    <ul className='main'>
      {
        todos.map((todo,todoindex)=>{
         return(
          <Todocard {...props} key={todoindex} index={todoindex}>
            <p>{todo}</p>
         </Todocard>
         )
      })
      }
    </ul>
  )
}

export default TodoList
