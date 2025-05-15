import React, {useEffect, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./searchBar.module.css";
import redditLogo from "../../assets/redditLogo.png";
import { setQuery, selectQuery } from "./searchBarSlice";
import { fetchArticles } from "../article/articleSlice";

export default function SearchBar() {
    const query = useSelector(selectQuery);
    const dispatch = useDispatch();
    const timeoutRef = useRef(null);

    useEffect (() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            dispatch(fetchArticles(query));
        }, 1000);

        return () => clearTimeout(timeoutRef.current);
    }, [query, dispatch]);

    return (
        <section className={styles.searchBar}>
            <img src={redditLogo} ></img>
            <h1>Reddit Reader</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    id="searchTerm"
                    type="text"
                    value={query}
                    onChange={(e)=> dispatch(setQuery(e.currentTarget.value))} 
                    placeholder="Search Reddit here"
                />
            </form>
        </section>
    );
}