import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import roomReducer from "../reducers/roomReducer";

const store = configureStore({
    reducer: {roomReducer},
    middleware: [thunk],
});

export default store;