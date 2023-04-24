//import { useMediaPredicate } from "react-media-hook"

export default function Project(props) {
  //const smallerThan600 = useMediaPredicate("(max-width:600px)");

  return (
    <div className="project-list-item" style={{
      display: "flex",
      //alignItems: smallerThan600 ? "start" : "center",
      //flexFlow: smallerThan600 ? "column" : null,
      //maxWidth: smallerThan600 ? "85vw" : null,
      //marginRight: smallerThan600 ? "0" : null,
      //paddingBottom: smallerThan600 ? "25px" : null,
    }}>
      <div className="project-list-info" style={{ width: "95%" }}>
        <h3><a href={props.link} target="_blank" rel="noreferrer">{props.title}</a></h3>
        <p style={{ margin: "0" }}>{props.description}</p>
        {props.git ? <a href={props.git} target="_blank" rel="noreferrer" style={{ color: "grey", textDecoration: "underline" }}>GitHub</a> : <div></div>}
      </div>
    </div>
  )
}