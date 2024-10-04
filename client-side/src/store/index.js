import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./games";


export default configureStore({
    reducer: {
        game: gameReducer,
    },
});
