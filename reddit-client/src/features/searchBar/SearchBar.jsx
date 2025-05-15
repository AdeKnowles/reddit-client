import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./searchBar.module.css";
import redditLogo from "../../assets/redditLogo.png";
import { setQuery, selectQuery } from "./searchBarSlice";

export default function SearchBar() {
    const query = useSelector(selectQuery);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.length === 0) {
            return;
        }
    };
    return (
        <section className={styles.searchBar}>
            <img src={redditLogo} ></img>
            <h1>Reddit Reader</h1>
            <form onSubmit={handleSubmit}>
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