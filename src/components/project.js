import React from "react"
import { useMediaPredicate } from "react-media-hook"

export default function Project(props) {
  const smallerThan600 = useMediaPredicate("(max-width:600px)");

  return (
    <div className="project-list-item" style={{
      display: "flex",
      alignItems: smallerThan600 ? "start" : "center",
      flexFlow: smallerThan600 ? "column" : null,
      maxWidth: smallerThan600 ? "85vw" : null,
      marginRight: smallerThan600 ? "0" : null,
      paddingBottom: smallerThan600 ? "25px" : null,
    }}>
      <img src={props.img} alt={props.alt} style={{ margin: smallerThan600 ? "0 auto" : null, height: "150px", width: "150px" }} />
      <div className="project-list-info" style={{ width: "95%", paddingLeft: smallerThan600 ? "0" : "50px" }}>
        <h3>{props.title}</h3>
        <p style={{ margin: "0" }}>{props.description}</p>
        <a href={props.link} target="_blank" rel="noreferrer">{props.link}</a>
        <br />
        <a href={props.git} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  )
}