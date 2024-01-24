import React from 'react';
import styles from './styles.module.css';

function Home() {
    return (
        <section className={styles.home_section}id="home">
            <p className={styles.greet}>Hey, I'm</p>
            <h1 className={styles.heading_1}>Safa</h1>
            <h1 className={styles.heading_2}>I'm a software developer.</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quo ab velit dolorem, totam amet dignissimos, odio quisquam sit accusamus facere aliquam tempora neque dolorum at blanditiis qui vero suscipit.
            </p>
            <a href="#work">
                <button className={styles.btn}>Check out my work!</button>
            </a>
        </section>

    )
}
export default Home;