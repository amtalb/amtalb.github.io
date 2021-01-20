import React from "react"

import styles from "./layout.module.scss"

export default function Layout({ children }) {
  return (
    <div id="container" style={{height: "100vh", width: "100vw", display: "flex", backgroundColor: "#F9F1E5" }}>
      <div id={styles.filler}></div>
      <div id={styles.content}>
        {children}
      </div>
    </div>
  )
}
