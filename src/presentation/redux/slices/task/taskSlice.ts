import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskInterface } from "../../../../domain/interfaces/TaskInterface";


export const taskSlice = createSlice({
    name: "todos",
    initialState: [] as TaskInterface[],
    reducers: {
        addTodo: (state, action: PayloadAction<TaskInterface>) => {
            state.push(action.payload);
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { addTodo, deleteTodo } = taskSlice.actions;