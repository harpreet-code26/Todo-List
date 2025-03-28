import React from 'react'

const Todocard = (props) => {

  const { children , handleDeleteTodo,index,handleEditTodo } = props;
  return <li className='todoItem'>
    {children}
    <div className='actionsContainer'>
      <button  onClick={()=>{handleEditTodo(index)}}>
        <i className="fa-solid fa-pen-to-square"></i>

      </button>
      <button onClick={()=>{handleDeleteTodo(index)}}>
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  </li>
}

export default Todocard
