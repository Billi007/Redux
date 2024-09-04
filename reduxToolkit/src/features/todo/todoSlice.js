import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
  todos: [{id: 1, message: "Hello world"}],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // ADD TODO
        addTodo: (state, action) => {
            const todo = {
             id: nanoid(), 
             message: action.payload
            }
            state.todos.push(todo)
        },
        // REMOVE TODO
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    },
    updateTodo: (state, action) => {
        const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);
        if (todoIndex!== -1) {
            state.todos[todoIndex].message = action.payload.message;
        }
    }
}) 

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions
export default todoSlice.reducer