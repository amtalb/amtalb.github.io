import Image from 'next/image'

import NavBar from "../components/navbar"

const IndexPage = () => (
    <main style={{ display: "flex", flexFlow: "column", backgroundColor: "#FFFFF0" }}>
        <div style={{ height: "100vh", width: "90vw", marginLeft: "10vw", display: "flex", alignItems: "center" }}>
            <NavBar></NavBar>
        </div>
    </main >
)

export default IndexPage
