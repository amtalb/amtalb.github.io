export default function ExperienceItem(props) {

    return (
        <div
            style={{
                display: "flex",
                flexFlow: "column",
                justifyContent: "center",
                background: "#ABABAB",
                border: "1px solid black",
                height: "13%",
                visibility: "hidden"
            }}
            id={props.id}
        >
            <div style={{ margin: "1%", display: "flex", flexFlow: "column" }}>
                <h3 style={{ margin: "0" }}>{props.name}</h3>
                <span style={{ color: "white", fontSize: "1.5vh" }}>{props.title}</span>
                <span style={{ color: "white", fontSize: "1.5vh" }}>{props.timeRange}</span>
            </div>
        </div>
    )
}