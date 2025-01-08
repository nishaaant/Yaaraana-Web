import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name : 'connections',
    initialState : null ,
    reducers : {
        getConnection : (state , action) => action.payload,
        removeConnection : (state , actions) => null,
    }
})

export const {getConnection, removeConnection} = connectionSlice.actions;
export default connectionSlice.reducer