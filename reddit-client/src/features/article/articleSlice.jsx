import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import redditExampleData from '../assets/redditExampleData.json';

export const articleSlice = createSlice({
    name: 'article',
    initialState: {
        redditExampleData
    }
});