import React from 'react'
import './App.css'
function TodoText({todo,deleteFromTodo,editFromTodo}){
  function deleteTodo(e){
    deleteFromTodo(e.target.value)
  }
  function editTodo(e){
    editFromTodo(e.target.value)
  }
  return(
    <div className="inline">
    <p>{todo}</p>
    <button value={todo} onClick={deleteTodo}>Delete</button>
    <button value={todo} onClick={editTodo}>Edit</button>
    </div>
  )
}
export default TodoText