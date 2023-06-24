// import React ,{useState ,useReducer} from "react";
import React, { useReducer, useState } from 'react'
import Todo from './Todo'
export const ACTIONS ={
    ADD_TODO_LIST:'ADD_TODO_LIST',
    DELETE_TODO_LIST:'DELETE_TODO_LIST',
    TOGGLE_TODO_LIST:'TOGGLE_TODO_LIST',
}
const reducer =(state,action)=>{
   switch(action.type){
   case ACTIONS.ADD_TODO_LIST:
    return [...state ,setTodo(action.payload.todo)] 
   case ACTIONS.DELETE_TODO_LIST:
    return state.filter((item)=>item.id!==action.payload.id) 
   case ACTIONS.TOGGLE_TODO_LIST:
    return state.map((todo)=>{
      if(todo.id===action.payload.id){
        return {
          ...todo ,
          done:!todo.done,
        }
      }
      return todo;

    })
    default :
    return state
   } 
}

const setTodo =(todo)=>{
  return {
    id:Date.now(),
    todo:todo ,
    done:false,
  }
}



const TodoList = () => {
  const [text ,setText] = useState('')
  const [todo ,dispatch] = useReducer(reducer ,[])
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch({
      type:ACTIONS.ADD_TODO_LIST,
      payload:{
        todo:text,
      }
    })
    setText('')
  }
  return (
    <div>
      <div>
        TODO LIST
      </div>
      <form action="">
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button type="submit" onClick={handleSubmit}>Add Todo</button>
      </form>
      <br />
      <div>
      {todo.map((todo,i) => {
          return <Todo key={i} todo={todo} dispatch={dispatch} />;
        })}
      </div>
    </div>
  )
}

export default TodoList