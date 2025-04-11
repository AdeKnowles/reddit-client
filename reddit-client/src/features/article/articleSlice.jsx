import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialRedditArticles = "https://www.reddit.com/.json";


export const fetchArticles = createAsyncThunk("article/fetchArticles", async() => {
    const externalJsonFile = await fetch(initialRedditArticles);
    const rawData = await externalJsonFile.json();
    /*const refinedData = [];
    rawData.data.children.forEach(reddit => {
        refinedData.push({
            id: reddit.data.id,
            subReddit: reddit.data.subreddit,
            subRedditLink: "https://reddit.com/r/"+reddit.data.subreddit,
            imageSrc: reddit.data.url,
            author: reddit.data.author,
            authorLink: "https://reddit.com/u/"+reddit.data.author,
            numComments: reddit.data.num_comments
        });    
    });
    return refinedData;*/
    return rawData;
})


export const articleSlice = createSlice({
    name: 'article',
    initialState: {
        articles:[],
        isLoadingArticles: false,
        failedToLoadArticles: false
    },
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase(fetchArticles.pending, (state) => {
            state.isLoadingArticles = true;
            state.failedToLoadArticles = false;
        })
        .addCase(fetchArticles.fulfilled, (state, action) => {
            state.isLoadingArticles = false;
            state.failedToLoadArticles = false;
            state.articles.push(action.payload);
        })
        .addCase(fetchArticles.rejected, (state) => {
            state.isLoadingArticles = false;
            state.failedToLoadArticles = true;
        })
    }
});

export const selectReddits = (state) => state.article.articles;
export const articleReducer = articleSlice.reducer;