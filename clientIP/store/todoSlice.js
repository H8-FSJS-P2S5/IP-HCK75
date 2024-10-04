import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    items: [],
    errors: null,
    loading: false,
};
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        fetchSuccess: (state, action) => {
            state.items = [...action.payload];
        },

        addTodo: (state, action) => {
            state.items.push(action.payload);
        },

        deleteTodo: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },
        isLoading: (state, action) => {
            state.loading = action.payload;
        },
        isError: (state, action) => {
            state.errors = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { fetchSuccess, addTodo, deleteTodo, isLoading, isError } =
    todoSlice.actions;

export default todoSlice.reducer;

export const fetchPlants = () => {
    return async (dispatch) => {
        try {
            dispatch(isLoading(true));
            const { data } = await axios.get("http://localhost:3000/");
            dispatch(fetchSuccess(data));
        } catch (err) {
            dispatch(isError(err));
        } finally {
            dispatch(isLoading(false));
        }
    };
};

export const addTodoSuccesss = (todo) => {
    return async (dispatch) => {
        try {
            dispatch(isLoading(true));
            const { data } = await axios.post("http://localhost:3000/tasks", {
                title: todo.title,
                completed: todo.completed,
            });
            dispatch(addTodo(data));
        } catch (err) {
            dispatch(isError(err));
        } finally {
            dispatch(isLoading(false));
        }
    };
};
