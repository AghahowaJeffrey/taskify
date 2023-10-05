import React from 'react'
import { Todos } from '../Model'

interface Props {
    todos: Todos[];
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const TodoList = ({todos, setTodos}: Props) => {
  return (
    <>
    {todos.map((t) => {
        <li>{t.todo}</li>
    })}
    </>
  )
}

export default TodoList;