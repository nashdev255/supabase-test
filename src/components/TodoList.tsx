import React, { useState } from 'react';
import { getAllTodos, deleteTodo } from '../utils/supabaseFunctions'

type Props = {
    todos: {
        id: number,
        title: string,
    }[];
    setTodos: React.Dispatch<any>,
};

const TodoList = (props: Props) => {
    const { todos, setTodos } = props;

    const HandleDelete = async (id: number) => {
        await deleteTodo(id);
        const todos = await getAllTodos();
        setTodos(todos);
    };

    return (
        <>
            <ul className='mx-auto'>
                {todos.map((todo) => (
                    <div key={todo.id} className='flex bg-orange-200 rounded-md mt-2 mb-2 p-2 justify-between'>
                        <li className='font-medium'>✅ {todo.title}</li>
                        <span className='cursor-pointer' onClick={() => HandleDelete(todo.id)}>✕</span>
                    </div>
                ))}
            </ul>
        </>
    );
};

export default TodoList;
