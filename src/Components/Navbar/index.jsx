import React from 'react';
import styles from './styles.module.css';

function Navbar() {
    return (
        <nav className={styles.nav_container}>
            <div className={styles.nav_left}>
                <a href="#home">Safa Al-Siaudi</a>
            </div>
            <div className={styles.nav_right}>
                <a href="#about" className={styles.nav_link}>
                    <span>/</span>About
                </a>
                <a href="#experience" className={styles.nav_link}>
                    <span>/</span>Experience
                </a>
                <a href="#contact" className={styles.nav_link}>
                    <span>/</span>Contact
                </a>
                <button className={styles.nav_resume_btn}>Resume</button>
            </div>
        </nav>
    )
}

export default Navbar;
