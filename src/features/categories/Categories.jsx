import React from "react";
import styles from  "./categories.module.css";
import redditLogo from "../../assets/redditLogo.png";


export default function Categories(props) {
    return (
        <section className={styles.categories}>
            <h2>Subreddits</h2>
            <ul>
                {props.subreddits.map((subreddit)=>(
                    <li key={subreddit.id}>
                        <a href={subreddit.link} target="_blank">
                            <img 
                                src={subreddit.icon==''?redditLogo:subreddit.icon}
                                alt={`${subreddit.name} icon`}
                            />
                            {subreddit.name}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}