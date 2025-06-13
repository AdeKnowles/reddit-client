import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialRedditArticles = "https://www.reddit.com/.json";

export const fetchArticles = createAsyncThunk(
    "article/fetchArticles", 
    async(searchTerm, {rejectWithValue}) => {
        const url = searchTerm
            ? `https://www.reddit.com/search.json?q=${encodeURIComponent(searchTerm)}`
            : "https://www.reddit.com/.json";
        try{
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const allRawData = await response.json();
            if(!allRawData?.data?.children) {
                throw new Error("Invalid Reddit API response structure");
            }
            console.log(allRawData);
            const refinedData = allRawData.data.children.map(reddit => ({
                id: reddit.data.id,
                title: reddit.data.title,
                subReddit: reddit.data.subreddit,
                subRedditLink: `https://reddit.com/r/${reddit.data.subreddit}`,
                imageSrc: reddit.data.url,
                videoSrc: reddit.data.media?.reddit_video?.scrubber_media_url || null,
                author: reddit.data.author,
                authorLink: `https://reddit.com/u/${reddit.data.author}`,
                numComments: reddit.data.num_comments,
                secure_media: reddit.data.secure_media,
                url: reddit.data.url
            }));
            return refinedData;
        } catch (error) {
            console.error("Failed to fetch articles:", error);
            return rejectWithValue(error.message || "Unknown error");
        }
    }
);


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
            state.articles = action.payload;
        })
        .addCase(fetchArticles.rejected, (state) => {
            state.isLoadingArticles = false;
            state.failedToLoadArticles = true;
        })
    }
});

export const selectReddits = (state) => state.article.articles;
export const articleReducer = articleSlice.reducer;