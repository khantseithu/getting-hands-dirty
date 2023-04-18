import {configureStore, createSlice} from "@reduxjs/toolkit"

const initialState = { todos: [] };

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) =>{
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        }
    },
        
})

const store = configureStore({
    reducer: {
        todos: todoSlice.reducer
    }
})

export {store, todoSlice}