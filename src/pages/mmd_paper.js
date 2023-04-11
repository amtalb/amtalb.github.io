import React from "react"

import pdf from "../media/MMD_Paper.pdf"

import styles from "./resume.module.scss"

const Memo3 = () => (
    <iframe title="MMD Paper" src={pdf + "#toolbar=0"} style={{ width: "100vw", height: "100vh" }}></iframe>
)

export default MMD_Paper