import Layout from "../components/layout"
import NavBar from "../components/navbar"
import Skill from "../components/skill"

const Skills = () => (
    <Layout>
        <NavBar></NavBar>
        <h4>The values represented here are not on any particular scale and do not carry any real meaning but you get the idea.</h4>
        <div style={{ display: "flex", width: "100%" }}>
            <div style={{ display: "flex", flexFlow: "column", flexGrow: "1" }}>
                <Skill name="Amazon Web Services" width="30%"></Skill>
                <Skill name="Clojure" width="30%"></Skill>
                <Skill name="Compilers" width="20%"></Skill>
                <Skill name="Databricks" width="70%"></Skill>
                <Skill name="Git" width="80%"></Skill>
                <Skill name="Linux" width="65%"></Skill>
                <Skill name="Machine Learning" width="50%"></Skill>
                <Skill name="Natural Language Processing" width="55%"></Skill>
                <Skill name="NumPy" width="70%"></Skill>
                <Skill name="Pandas" width="70%"></Skill>
                <Skill name="Python" width="80%"></Skill>
                <Skill name="Relational Databases" width="75%"></Skill>
                <Skill name="Rust" width="40%"></Skill>
                <Skill name="Sci-kit Learn" width="40%"></Skill>
                <Skill name="Spark/PySpark" width="70%"></Skill>
                <Skill name="SQL" width="75%"></Skill>
            </div>
        </div>
    </Layout >
)

export default Skills