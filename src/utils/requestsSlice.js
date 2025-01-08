import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
    name : 'requests',
    initialState : null,
    reducers : {
        getRequests : (state , action) => action.payload,
        removeRequest: (state, action) => {
            const newArray = state.filter((r) => r._id !== action.payload);
            return newArray;
        }
    }
})

export const {getRequests , removeRequest} = requestsSlice.actions
export default requestsSlice.reducer