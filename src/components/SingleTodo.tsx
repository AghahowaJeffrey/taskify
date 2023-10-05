import React from 'react'
import { Todos } from '../Model'
import { AiFillEdit } from 'react-icons/ai'

interface Props {
    todo: Todos
    todos: Todos[];
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

export const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
     <>
     <form >
        <span>{todo.todo}</span>
        <div>
            <span><AiFillEdit /></span>
            <span></span>
            <span></span>
        </div>
     </form>
     </>
  )
}

export default SingleTodo