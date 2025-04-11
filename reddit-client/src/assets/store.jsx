import {configureStore} from "@reduxjs/toolkit";
import { categoriesReducer } from "../features/categories/categoriesSlice";
import { articleReducer } from "../features/article/articleSlice";

export default configureStore({
    reducer: {
        categories: categoriesReducer,
        article: articleReducer
    }
});