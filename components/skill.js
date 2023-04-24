import styles from "./skill.module.scss"

export default function Skill(props) {

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <h3 style={{ margin: "10px 0", width: "150px" }}>{props.name}</h3>
            <div className={styles.skillBar} style={{ width: props.width }}></div>
            <div className={styles.skillCircle} style={{}}></div>
        </div>
    )
}