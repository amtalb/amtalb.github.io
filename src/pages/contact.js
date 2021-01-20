import React from "react"

import styles from "./contact.module.scss"

import Layout from "../components/layout"
import NavBar from "../components/navbar"
import Text from "../components/text"

const About = () => (
  <Layout>
    <NavBar></NavBar>
    <Text>
    <h1>Contact</h1>
      <p>
        If you're interested in my work or want to hear about my delicious family mac 'n' cheese recipe, drop me a line:
      </p>
      <ul>
        <li className={styles.contactLink}>
          <img src="https://img.icons8.com/material-sharp/24/000000/email.png" alt="Email Icon"/>
          <span>Email: <a href="mailto:atalbott13@gmail.com">atalbott13@gmail.com</a></span>
        </li>
        <li className={styles.contactLink}>
          <img src="https://img.icons8.com/material-sharp/30/000000/linkedin.png" alt="LinkedIn Icon"/>
          <span>LinkedIn: <a href="https://www.linkedin.com/in/alexander-talbott-989723ab/">https://www.linkedin.com/in/alexander-talbott-989723ab/</a></span>
        </li>
        <li className={styles.contactLink}>
          <img src="https://img.icons8.com/material-sharp/24/000000/github.png/" alt="GitHub Icon"/>
          <span>GitHub: <a href="https://github.com/amtalb/">https://github.com/amtalb/</a></span>
        </li>
        <li className={styles.contactLink}>
          <img src="https://img.icons8.com/ios-filled/30/000000/medium-monogram.png" alt="Medium Icon"/>
          <span>Medium: <a href="https://medium.com/@amtalb/">https://medium.com/@amtalb/</a></span>
        </li>
      </ul>
      <p>
        Source code for this website available at: <a href="https://github.com/amtalb/personal_website">github.com/amtalb/personal_website</a>
      </p>
      <p>
        <a href="https://icons8.com/icon/98960/linkedin">icons by Icons8</a>
      </p>
    </Text>
  </Layout>
)

export default About 
