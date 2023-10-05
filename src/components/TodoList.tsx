import React from 'react'
import SingleTodo from './SingleTodo'
import { Todos } from '../Model'

interface Props {
    todos: Todos[];
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const TodoList = ({todos, setTodos}: Props) => {
  return (
    <>
        {todos.map((todo) => (
        <SingleTodo key={todo.id} 
        todo={todo} 
        todos={todos} 
        setTodos={setTodos} />))}
    </>
  )
}

export default TodoList;