import React from "react"

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
            alt="College Football Elo Rankings"
            link="https://share.streamlit.io/amtalb/college_football_elo/src/main.py"
            title="College Football Elo Rankings"
            description="My attempt to bring Elo rankings to college football and prove to everyone the SEC is overrated. Made in Python using Streamlit."
            git="https://github.com/amtalb/college_football_elo">
          </Project>
        </li>
        <li>
          <Project
            alt="COVID-19 Visualization"
            link="https://covid-19-520bc.web.app/"
            title="COVID-19 Visualization"
            description="A quick visualization of the spread of COVID-19 around the world. Made using R and the plotly library."
            git="https://github.com/amtalb/covid-19_visualization">
          </Project>
        </li>
        <li>
          <Project
            alt="SizeUp Project Thumbnail"
            link="https://amtalb.github.io/SizeUp"
            title="SizeUp"
            description="A site that finds countries of similar size (with cool spinning globes!). Written in Elm."
            git="https://github.com/amtalb/sizeup">
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
        <li>
          <Project
            alt="PCCR Project Thumbnail"
            link="https://pccr.alexandermtalbott.com"
            title="PC/CR Website"
            description="A website covering everything about my time in the Peace Corps. Made from scratch using Bootstrap."
            git="">
          </Project>
        </li>
      </ul>
    </Text>
  </Layout>
)

export default Projects 
