import React, { useState, useEffect } from 'react';
import { getAllTodos, addTodo } from '../utils/supabaseFunctions';
import TodoList from './TodoList';

const TodoApp = () => {
    const [todos, setTodos] = useState<any>([]);
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        const getTodos = async () => {
            const todos = await getAllTodos();
            setTodos(todos);
        };
        getTodos();
    }, []);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if(title === "") return;
        await addTodo(title);
        const todos = await getAllTodos();
        setTodos(todos);
        setTitle("");
    };

    return (
        <section className="text-center mb-2 text-2xl font-medium">
            <h3>Supabase Todo App</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                type="text"
                className='mr-2 shadow-md p-1 outline-none appearance-none'
                onChange={(e) => setTitle(e.target.value)}
                />
                <button className='shadow-md border-2 p-1 rounded-lg bg-green-200'>Add</button>
            </form>
            <TodoList todos={todos} setTodos={setTodos}/>
        </section>
    );
};

export default TodoApp;
