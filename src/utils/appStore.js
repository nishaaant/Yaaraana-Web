import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import feedReducer from "./feeedSlice"
import connectionReducer from "./connectionsSlice"

const appStore = configureStore({
    reducer : {
        user : userReducer,
        feed :feedReducer,
        connections : connectionReducer
    },
})

export default appStore;