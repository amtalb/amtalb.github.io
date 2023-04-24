export default function Contact() {
    return (
        <div style={{ display: "flex", flexFlow: "column", justifyContent: "center", padding: "2rem", margin: "0 auto" }}>
            <ul style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "center", margin: "0 auto", padding: "0" }}>
                <li>
                    <a href="mailto:atalbott13@gmail.com">
                        <img src="https://img.icons8.com/material-sharp/24/000000/email.png" alt="Email Icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/alexander-talbott/">
                        <img src="https://img.icons8.com/material-sharp/30/000000/linkedin.png" alt="LinkedIn Icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/amtalb/">
                        <img src="https://img.icons8.com/material-sharp/256/github.png" alt="GitHub Icon" />
                    </a>
                </li>
            </ul>
            <p style={{ textAlign: "center" }}>
                <a href="https://icons8.com/icon/98960/linkedin">icons by Icons8</a>
            </p>
        </div >
    )
}