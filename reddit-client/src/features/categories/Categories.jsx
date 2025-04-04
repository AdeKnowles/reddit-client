import React from "react";
import styles from  "./categories.module.css";

export default function Categories(props) {
    return (
        <section className={styles.categories}>
            <h2>Subreddits</h2>
            <ul>
                {props.subreddits.map((subreddit)=>(
                    <li><a href={subreddit.link} target="_blank">{subreddit.icon} {subreddit.name}</a></li>
                ))}
            </ul>
        </section>
    );
}