import {configureStore} from "@reduxjs/toolkit";
import { categoriesReducer } from "../features/categories/categoriesSlice";
import { articleReducer } from "../features/article/articleSlice";
import searchBarReducer from "../features/searchBar/searchBarSlice";

export default configureStore({
    reducer: {
        categories: categoriesReducer,
        article: articleReducer,
        searchBar: searchBarReducer
    }
});