import React from "react"

import Contact from "../components/contact"

import styles from "./layout.module.scss"

export default function Layout({ children }) {
  return (
    <main id="container" style={{
      display: "flex", flexFlow: "column", backgroundColor: "#FFFFF0"
    }}>
      <div id={styles.content} style={{ minHeight: "100vh", margin: "0 auto", padding: "0 5%" }}>
        {children}
      </div>
      <div style={{ backgroundColor: "#E7E7D9", width: "100%" }}>
        <div style={{ display: "flex", padding: "2rem", maxWidth: "50rem", margin: "0 auto" }}>
          <Contact></Contact>
        </div>
      </div>
    </main >
  )
}
