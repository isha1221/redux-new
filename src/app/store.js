import { configureStore } from "@reduxjs/toolkit";
import gitUser from "../features/gitUserSlice";
import userReducer from "../features/userSlice"


export const store = configureStore({
    reducer: {
        app: gitUser,
        user: userReducer,
    },
});

