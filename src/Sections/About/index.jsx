import React from 'react';
import Heading from '../../Components/Heading';
import styles from './styles.module.css';

function About () {
    return (
        <section id="about">
            <Heading index="01" heading="About Me"/>
            <div className={styles.container}>
                <div className={styles.left}>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At aliquid veniam obcaecati sed quisquam sunt et officia modi hic expedita sequi atque, illo ullam magni perspiciatis molestiae quae repellat. Enim!
                    </p>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus adipisci repellat iste voluptate quas, in nisi id mollitia distinctio animi, beatae quis. Ipsam dicta obcaecati delectus id, aliquid consequatur!
                    </p>
                </div>
                <div className={styles.right}>
                    <img
                    src="./images/profile.jpg"
                    alt="profile"
                    className={styles.profile_img}
                    />
                    <div className={styles.img_border}></div>
                </div>
            </div>
        </section>
    );
}

export default About;