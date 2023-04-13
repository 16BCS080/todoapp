 import axios from "axios";

const baseurl = `http://localhost:3001`;

export async function getdata() {
  const todoapi = await axios.get( `${baseurl}`); 
  return todoapi.data.list;
}

async function insertdata ( data ) { 
  return await axios.post( `${baseurl}/insert`, data );
}
async function deletedata( data ) { 
  return await axios.post( `${baseurl}/delete`, data );
}
async function updatedata( data ) { 
  return await axios.post( `${baseurl}/update`, data );
}

export const initialState = {
  counter: 2,
  todos: [],
}

export const reducer =  (state, action) => {
  switch (action.type) {
    case "add":
      {
        const newCounter = state.counter + 1;
        insertdata( action.text ) ; 
        const newTodo = {
          id: newCounter,
          ...action.text,
        };  
        return {
          counter: 0,
          todos: [],
          refresh: ! state?.refresh
        };
      }
    case "edit":
      {
        const idx = state.todos.findIndex(t => t.id === action.id);
        const todo = Object.assign({}, state.todos[idx]);
        const insertlist = action.text;
        const newTodo = ( { ...todo, ...insertlist } );
        updatedata({ query: { _id: action.id } , update: newTodo});
        const todos = Object.assign([], state.todos);
        todos.splice(idx, 1, newTodo);
        return {
          counter: state.counter,
          todos: todos,
          refresh: ! state?.refresh          
        };
      }
    case "remove":
      {
        const idx = state.todos.findIndex(t => t.id === action.id);
        deletedata( { '_id': action.id })
        const todos = Object.assign([], state.todos);
        todos.splice(idx, 1);
        return {
          counter: state.counter,
          todos: todos,
          refresh: ! state?.refresh          
        };
      }
    case 'setdata':
      { 
        return {
          counter: action.payload.length,
          todos: action.payload,
        };
    }  
    default:
      return state;
  }
};