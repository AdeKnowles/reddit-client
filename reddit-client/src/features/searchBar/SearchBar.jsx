import React from "react";
import styles from "./searchBar.module.css";
import redditLogo from "../../assets/redditLogo.png";

export default function SearchBar() {
    const name = "";//this is temperary until the store is set up to handle state

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length === 0) {
            return;
        }
    }
    return (
        <section className={styles.searchBar}>
            <img src={redditLogo} ></img>
            <h1>Reddit Reader</h1>
            <form onSubmit={handleSubmit}>
                <input
                    id="searchTerm"
                    type="text"
                    value={name}
                    //onChange={(e)=> setName(e.currentTarget.value)} This needs sorting once state is ready
                    placeholder="Search Reddit here"
                />
            </form>
        </section>
    );
}