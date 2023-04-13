import React, {useState} from "react";

const Todo = ({ todo, remove, edit }) => {
  const [mode, setMode] = useState("list"); 
  const [text, setText] = useState(todo); 
  return (
    <div className="Todo">
      {mode === "list"
        ? 
        <>
          <span className="TodoText">{todo.title}</span>
          <span className="TodoText">{todo.desc}</span>
          <button className="RemoveTodo" onClick={remove}>Remove</button>
          <button className="EditTodo" onClick={() => setMode("edit")}>Edit</button>
        </>
        : 
        <>
          <input 
            value={text?.title} 
            name={`title`} 
            onChange={e => setText( { ...text, [e.target.name]: e.target.value } )} 
            className="EditTodoInput" 
          />
          <input 
            value={text?.desc} 
            name={`desc`}
            onChange={e => setText( { ...text, [e.target.name]:e.target.value } )} 
            className="AddTodoInput" 
          />
          <button className="EditTodoSave" onClick={() => {edit(text); setMode("list");}}>Save</button>
          <button className="EditTodoCancel" onClick={() => setMode("list")}>Cancel</button>
        </>}
    </div>
  );
}

export default Todo;