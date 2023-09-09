// App.js
import React, { useEffect, useState } from 'react';
import { addtodo, getAlltodo,updateTodo,deleteTodo} from './utils/Handle.Api';
import Todo from './components/Todo';

function App() {
  const [todo, setTodo] = useState([]);
  const[text,setText]=useState("")
  const[isUpdating,setIsUpdating]=useState(false)
  const[todoId,setToDoId]=useState("")
  
   useEffect(() => {
    getAlltodo(setTodo);
  }, []);

const updateMode = (_id,text)=>{
setIsUpdating(true)
setText(text)
setToDoId(_id)
}

  return (
    <div className="App">
      <div className="container">
        <h1>TODOAPP</h1>
        <div className="top">
          <input 
          type="text" 
          placeholder="Add todos..." 
          value={text}
          onChange={(e)=>setText(e.target.value)}
          />
          <div className="add" 
          onClick={ isUpdating ? 
          () => updateTodo(todoId,text,setTodo,setText,setIsUpdating) 
          : () => addtodo(text,setText,setTodo)}>
           {isUpdating ? "Update":"Add"} 
            </div>
        </div>
        <div className="list">
          {todo.map((item) => <Todo 
            key={item._id} 
            text={item.text} 
            updateMode={()=>updateMode(item._id,item.text)}
            deletetodo={()=>deleteTodo(item._id,setTodo)} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
