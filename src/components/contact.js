import React from "react"

import styles from "./contact.module.scss"

export default function Contact() {
    return (
        <div>
            <h3>Contact</h3>
            <p>
                If you're interested in my work or want to hear about my delicious family mac 'n' cheese recipe, drop me a line:
            </p>
            <ul style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
                <li className={styles.contactLink}>
                    <a href="mailto:atalbott13@gmail.com">
                        <img src="https://img.icons8.com/material-sharp/24/000000/email.png" alt="Email Icon" />
                    </a>
                </li>
                <li className={styles.contactLink}>
                    <a href="https://www.linkedin.com/in/alexander-talbott-989723ab/">
                        <img src="https://img.icons8.com/material-sharp/30/000000/linkedin.png" alt="LinkedIn Icon" />
                    </a>
                </li>
                <li className={styles.contactLink}>
                    <a href="https://github.com/amtalb/">
                        <img src="https://img.icons8.com/material-sharp/24/000000/github.png/" alt="GitHub Icon" />
                    </a>
                </li>
            </ul>
            <p>
                <a href="https://icons8.com/icon/98960/linkedin">icons by Icons8</a>
            </p>
        </div>
    )
}