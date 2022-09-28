import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMail = createAsyncThunk('mail/fetchMail', async ({ receiver }) => {
    const { data } = await axios.get('http://localhost:8800/', { params: { receiver } });

    return data;
});

export const sendMessage = createAsyncThunk('mail/sendMessage', async ({ topic, message, sender, receiver }) => {
    const { data } = await axios.post('http://localhost:8800/', { topic, message, sender, receiver });

    return data;
});
