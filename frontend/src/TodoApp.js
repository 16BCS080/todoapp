import React, { useReducer, useEffect } from "react";
import { initialState, reducer, getdata } from "./todoreducer";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect( () => { 
    getdata().then( res => {
      dispatch({type: "setdata", payload: res });
    });     
  },[ state?.refresh ]);

  const handleAddnew = ( text ) => dispatch({type: "add", text: text}) ;

  return (
    <>
      <AddTodo
        add={ handleAddnew }
      />
      {
        state.todos.map( (t,index) => (
          <Todo 
            key={index}
            todo={ { title: t.title, desc: t.desc } }
            remove={() => dispatch({type: "remove", id: t._id})}
            edit={text => dispatch({type: "edit", id: t._id, text: text })}
          />
        ))
      }
    </>
  );
}
export default TodoApp;