import React from "react";
import styles from  "./categories.module.css";

export default function Categories() {
    return (
        <section className={styles.categories}>
            <p>Category 1</p>
            <p>Category 2</p>
            <p>Category 3</p>
            <p>Category 4</p>
            <p>Category 5</p>
        </section>
    );
}