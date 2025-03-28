import React from "react";
import styles from  "./articles.module.css";

export default function Articles() {
    return (
        <section className={styles.articles}>
            <p>Article 1</p>
            <p>Article 2</p>
            <p>Article 3</p>
            <p>Article 4</p>
            <p>Article 5</p>
        </section>
    );
}