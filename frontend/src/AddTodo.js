import { useState } from "react";

const AddTodo = ({add}) => {
  const init = { title: '', desc: '' };
  const [text, setText] = useState(init);
  return (
    <div className="AddTodo">
      <input 
        value={ text?.title } 
        name={`title`} 
        onChange={e => setText({ ...text , [e.target.name]: e.target.value})} 
        className="AddTodoInput" 
      />
      <input 
        value={ text?.desc } 
        name={`desc`} 
        onChange={e => setText({ ...text, [e.target.name]: e.target.value })} 
        className="AddTodoInput" 
      />
      <button 
        className="AddTodoButton" 
        onClick={
          () => {   
            console.log('**'+text);
            add(text); 
            setText(init); 
          }
        }
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;