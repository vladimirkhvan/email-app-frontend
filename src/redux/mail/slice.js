import { createSlice } from "@reduxjs/toolkit";

import { fetchMail, sendMessage } from "./asyncActions";

const initialState = {
    messages: [],
    status: 'PENDING',
};

const mailSlice = createSlice({
    name: 'mail',
    initialState,
    reducers: {
        setMail(state, action) {
            state.messages = action.payload;
        },
    },
    
    extraReducers: (builder) => {
        builder.addCase(fetchMail.pending, (state) => {
            state.messages = [];
            state.status = 'PENDING';
        });
        builder.addCase(fetchMail.fulfilled, (state, action) => {
            state.messages = action.payload;
            state.status = 'FULFILLED';
        });
        builder.addCase(fetchMail.rejected, (state) => {
            state.messages = [];
            state.status = 'REJECTED';
        });

        builder.addCase(sendMessage.pending, (state) => {
            state.status = 'PENDING';
        });
        builder.addCase(sendMessage.fulfilled, (state) => {
            state.status = 'FULFILLED';
        });
        builder.addCase(sendMessage.rejected, (state) => {
            state.status = 'REJECTED';
        });
    },
});

export const { setMail } = mailSlice.actions;
export default mailSlice.reducer;
