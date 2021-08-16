import React from "react"

import pdf from "../media/memo2.pdf"

import styles from "./resume.module.scss"

const Memo2 = () => (
    <iframe title="Memo 2" src={pdf + "#toolbar=0"} style={{ width: "100vw", height: "100vh" }}></iframe>
)

export default Memo2