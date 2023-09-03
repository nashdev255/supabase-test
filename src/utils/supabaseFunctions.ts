import { supabase } from './supabaseClient.server';

export const getAllTodos = async () => {
    const todos = await supabase.from("todo").select("*");
    return todos.data;
};
