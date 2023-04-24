import Contact from "./contact"

import styles from "./layout.module.scss"

export default function Layout({ children }) {
  return (
    <main id={styles.container} style={{
      display: "flex", flexFlow: "column", backgroundColor: "#FFFFF0"
    }}>
      <div id={styles.content} style={{ minHeight: "100vh", margin: "0 auto", width: "50rem", padding: "0 5%" }}>
        {children}
      </div>
      <div style={{ backgroundColor: "#E7E7D9", width: "100%" }}>
        <Contact></Contact>
      </div>
    </main>
  )
}
