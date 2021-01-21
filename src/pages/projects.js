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
            alt="Global Land Temperatures"
            link="https://global-land-temperatures.web.app/"
            title="Global Land Temperatures"
            description="A viz of rising land temperatures in the US. Data from Kaggle"
            git="https://github.com/amtalb/global_land_temp">
          </Project>
        </li>
        <li>
          <Project
            alt="College Football Elo Rankings"
            link="https://college-football-elo.herokuapp.com/"
            title="College Football Elo Rankings"
            description="My attempt to bring Elo rankings to college football and prove to everyone the SEC is overrated. Made in Python using Streamlit."
            git="https://github.com/amtalb/college_football_elo">
          </Project>
        </li>
        <li>
          <Project
            alt="Australian Wildfires 2019-2020 Visualization"
            link="https://au-wildfires.web.app/"
            title="Australian Wildfires 2019-2020 Visualization"
            description="A small viz of the 19-20 Australian wildfire season. Made using R and the gganimate package."
            git="https://github.com/amtalb/australian_wildfires">
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
            link="https://sizeup.alexandermtalbott.com"
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
