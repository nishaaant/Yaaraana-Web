import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
    name : 'requests',
    initialState : null,
    reducers : {
        getRequests : (state , action) => action.payload,
        removeRequest : (state , action) => null
    }
})

export const {getRequests , removeRequest} = requestsSlice.actions
export default requestsSlice.reducer