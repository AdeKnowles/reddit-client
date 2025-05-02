import React, {useState} from "react";
import styles from  "./article.module.css";
import commentLogo from "../../assets/comment-png-1.png";

export default function Article(props) {
    const {id, title, subReddit, subRedditLink, imageSrc, author, authorLink, numComments} = props.article;
    const [imageError, setImageError] = useState(false);
    return (
        <div className={styles.article}>
            <h1>{title}</h1>
            {!imageError && imageSrc && (
                <img 
                    src={imageSrc}
                    alt="Article"
                    onError={() => setImageError(true)}>
                </img>
            )}
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