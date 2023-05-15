import styles from "./projects.module.scss"

import Layout from "../components/layout"
import NavBar from "../components/navbar"
import Text from "../components/text"
import Project from "../components/project"

const Projects = () => (
  <Layout>
    <NavBar></NavBar>
    <Text>
      <ul style={{ paddingLeft: "0", marginLeft: "0" }}>
        <li>
          <Project
            alt="Heisman Prediction"
            link="https://amtalb-heisman-prediction-appapp-gxc9bb.streamlit.app/"
            title="Heisman Prediction"
            description="A machine learning application that ingests data, processes it, and predicts college football Heisman Trophy winners."
            git="https://github.com/amtalb/heisman_prediction">
          </Project>
        </li>
        <li>
          <Project
            alt="MMD New Zealand Paper"
            link="/paper"
            title="An overview of multi-member districts: an analysis of the United States and New Zealand"
            description="Independent research project done under the supervision of Dr. Silvia Borzutzky regarding multi-member districts. The research covers the history of MMDs in the United States, the electoral systems associated with MMDs, and an analysis of the 1993 New Zealand electoral reform to proportional representation and multi-member districts.">
          </Project>
        </li>
        <li>
          <Project
            alt="Pennsylvania multi-member district proposal"
            link="https://arcg.is/1y09zT"
            title="Pennsylvania multi-member district proposal"
            description="A proposal for multi-member Congressional districts in Pennsylvania. Made using ArcGIS as a part of the 90-802 GIS class."
            git="https://arcg.is/1y09zT">
          </Project>
        </li>
        <li>
          <Project
            alt="SizeUp"
            link="https://amtalb.github.io/SizeUp/"
            title="SizeUp"
            description="An app that lets you pick a country and find the country in the world that is closest to it in size (by total area). With cool spinning globes!"
            git="https://github.com/amtalb/SizeUp">
          </Project>
        </li>
        <li>
          <Project
            alt="College Football Elo Rankings"
            link="https://cfb-elo.streamlit.app/"
            title="College Football Elo Rankings"
            description="My attempt to bring Elo rankings to college football and prove to everyone the SEC is overrated. Made in Python using Streamlit."
            git="https://github.com/amtalb/college_football_elo">
          </Project>
        </li>
        <li>
          <Project
            alt="Wheel of Fortune Project Thumbnail"
            link="https://github.com/amtalb/wheel_of_fortune"
            title="Wheel of Fortune Final Question Analysis"
            description="A short analysis of the Final Question in Wheel of Fortune. So you can prepare for when you're on the show."
            git="https://github.com/amtalb/wheel_of_fortune">
          </Project>
        </li>
      </ul>
    </Text>
  </Layout>
)

export default Projects
