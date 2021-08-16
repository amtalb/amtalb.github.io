import React from "react"

import pdf from "../media/resume.pdf"

import styles from "./resume.module.scss"

const Resume = () => (
  <iframe title="Resume of Alexander Talbott" src={pdf + "#toolbar=0"} style={{ width: "100vw", height: "100vh" }}></iframe>
)

export default Resume