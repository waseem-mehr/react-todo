import { useState } from 'react';
import './App.css';
import TodoText from './TodoText'

function App() {
  var [text,setText]=useState('')
  var [allTodos,setAllTodos]=useState([])
  function todoText(e){
    setText(e.target.value)
  
  }
  function addTodo(){
    allTodos.push(text)
    setText('')
  

  }
  function deleteFromTodo(val){
   var newArray=allTodos.filter((todo)=>todo!==val)
   setAllTodos(newArray)
  
  }
  function editFromTodo(val){
    var newArray=allTodos.filter((todo)=>todo!=val)
    setAllTodos(newArray)
    setText(val)
    
  }
  return (
    <div className="App">
      <h1>Todo</h1>
      <div>
      <input type="text" placeholder="Type here..." value={text} onChange={todoText} />
      <button onClick={addTodo}>Add</button>
      </div>
      <div>
        {allTodos.map((todo)=>
        <TodoText 
        deleteFromTodo={deleteFromTodo} 
        editFromTodo={editFromTodo}
        key={todo} todo={todo}/>
        )
        }
       
      </div>

    </div>
  );
}

export default App;
