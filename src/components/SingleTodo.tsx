import React, { useEffect, useRef, useState } from 'react'
import { Todos } from '../Model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

interface Props {
    todo: Todos
    todos: Todos[];
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

export const SingleTodo = ({ todo, todos, setTodos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) => 
                todo.id === id ? {...todo, isDone : !todo.isDone} : todo
            )
        );
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(todos.map((todo) => (
            todo.id === id ? {...todo, todo:editTodo}: todo
        )));
        setEdit(false);

        useEffect(() => {
            inputRef.current?.focus();
        }, [edit])

    };

    return (
     <>
     <form onSubmit={(e) => handleEdit(e, todo.id)}>
        {edit ? (
            <input 
            ref={inputRef}
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)} />
        ): todo.isDone ? (
            <s>{todo.todo}</s>
        ) : (
            <span>{todo.todo}</span>
        )}
        <div>
            <span 
            onClick={() => {
                if (!edit && !todo.isDone) {
                    setEdit(!edit)
                }
            }}>
                <AiFillEdit /></span>
            <span onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
            <span onClick={() => handleDone(todo.id)}><MdDone /></span>
        </div>
     </form>
     </>
  )
}
 
export default SingleTodo