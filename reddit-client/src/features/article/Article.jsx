import React from "react";
import styles from  "./article.module.css";

export default function Article(props) {
    return (
        <div className={styles.article}>
            <p>{props.article}</p>
        </div>
    );
}