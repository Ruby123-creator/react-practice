import React from 'react'
import { ACTIONS } from './TodoList'
const Todo = ({todo ,dispatch}) => {
  return (
    <div>
        <span style={{textDecoration:todo.done?'line-through':'none'}}>{todo.todo}</span>
        <button onClick={()=>{
            dispatch({
                type:ACTIONS.DELETE_TODO_LIST,
                payload:{id:todo.id}
            })
        }}>Delete</button>
        <button
        onClick={()=>{
          dispatch({
            type:ACTIONS.TOGGLE_TODO_LIST,
            payload:{id:todo.id}
          })
        }}
        >Toggle</button>
    </div>
  )
}

export default Todo