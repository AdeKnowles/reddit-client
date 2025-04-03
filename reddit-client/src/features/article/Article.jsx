import React from "react";
import styles from  "./article.module.css";
import commentLogo from "../../assets/comment-png-1.png";

export default function Article(props) {
    const title = props.article.data.title;
    const subReddit = props.article.data.subreddit;
    const subRedditLink = "https://reddit.com/r/"+subReddit;
    const imageSrc = props.article.data.url;
    const author = props.article.data.author;
    const authorLink = "https://reddit.com/u/"+author;
    const numComments = props.article.data.num_comments;
    return (
        <div className={styles.article}>
            <h1>{title}</h1>
            <img src={imageSrc}></img>
            <div className={styles.info}>
                <a href={authorLink} target="_blank"><h3>{author}</h3></a>
                <a href={subRedditLink} target="_blank"><h3>{subReddit}</h3></a>
                <span>
                    <img src={commentLogo} ></img>
                    <h3>{numComments}</h3>
                </span>
            </div>
        </div>
    );
}