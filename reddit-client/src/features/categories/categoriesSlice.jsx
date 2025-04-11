import { createSlice } from "@reduxjs/toolkit";

const subredditJsonFile = await fetch("https://www.reddit.com/reddits.json");
const subredditData = await subredditJsonFile.json();
const refinedSubredditData = [];
subredditData.data.children.forEach(subreddit => {
    refinedSubredditData.push({
        id: subreddit.data.id,
        name: subreddit.data.display_name,
        icon: subreddit.data.icon_img,
        link: subreddit.data.url
    });    
});
export const categoriesSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits:refinedSubredditData
    },
});

export const selectSubreddits = (state) => state.categories.subreddits;
export const categoriesReducer = categoriesSlice.reducer;