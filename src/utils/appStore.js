import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import feedReducer from "./feeedSlice"
import connectionReducer from "./connectionsSlice"
import requestReducer from "./requestsSlice"

const appStore = configureStore({
    reducer : {
        user : userReducer,
        feed :feedReducer,
        connections : connectionReducer,
        requests : requestReducer
    },
})

export default appStore;