import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"
const initialState = {
    data: [],
    loading: true,
    errors: null,
};

const token = localStorage.getItem('access_token')

export const gameSlice = createSlice({
    name: "games",
    initialState,
    reducers: {
        getGamesSuccess: (state, action) => {
            state.data = action.payload;
        },
        isError: (state, action) => {
            state.errors = action.payload
        },
        isLoading: (state, action) => {
            state.loading = action.payload;
        },
    }
});

export const { getGamesSuccess, isError, isLoading } = gameSlice.actions

export default gameSlice.reducer

export const fetchGames = () => {
    return async (dispatch) => {
        try {
            dispatch(isLoading(true));
            const { data } = await axios({
                method: "GET",
                url: "http://localhost:3000/games",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch(getGamesSuccess(data));
        } catch (error) {
            dispatch(isError(error))
        }
        finally {
            dispatch(isLoading(false))
        }
    }
}

export const fetchGameById = (id) => {
    return async (dispatch) => {
        try {
            dispatch(isLoading(true));
            const { data } = await axios({
                method: "GET",
                url: `http://localhost:3000/games/${id}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch(getGamesSuccess(data))
        } catch (error) {
            dispatch(isError(error))
        }
    }

}