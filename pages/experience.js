import Layout from "../components/layout"
import NavBar from "../components/navbar"
import ExperienceItem from "../components/experience_item"

import styles from './experience.module.scss'

const Experience = () => (
  <Layout>
    <NavBar></NavBar>
    <div className={styles.experienceContainer}>
      {/* left */}
      <div style={{ width: "46%", marginRight: "1%", display: "flex", flexFlow: "column" }}>
        <div className={styles.yearBox} style={{ height: "3.4%" }}><span>2023</span></div>
        <div className={styles.yearBox}><span>2022</span></div>
        <div className={styles.yearBox}><span>2021</span></div>
        <div className={styles.yearBox}><span>2020</span></div>
        <div className={styles.yearBox}><span>2019</span></div>
        <div className={styles.yearBox}><span>2018</span></div>
        <div className={styles.yearBox}><span>2017</span></div>
        <div className={styles.yearBox}><span>2016</span></div>
        <div className={styles.yearBox}><span>2015</span></div>
        <div className={styles.yearBox}><span>2014</span></div>
        <div className={styles.yearBox} style={{ height: "3.4%" }}><span>2013</span></div>
      </div>
      <div style={{ width: "6%", display: "flex" }}>
        {/* employment */}
        <div style={{ display: "flex", flexFlow: "column", flexGrow: "1", paddingRight: "4px" }}>
          {/* Deloitte */}
          <div
            className={styles.experience}
            style={{ backgroundColor: "black", borderColor: "#86BC25", height: "9.5%" }}
            onMouseOver={() => {
              document.getElementById("deloitte").style.visibility = "visible";
            }}
            onMouseOut={() => {
              document.getElementById("deloitte").style.visibility = "hidden";
            }}></div>
          {/* gap */}
          <div style={{ height: "7.8%" }}></div>
          {/* AI for Good */}
          <div
            className={styles.experience}
            style={{ backgroundColor: "#2596be", borderColor: "#FFFFFF", height: "9.5%" }}
            onMouseOver={() => {
              document.getElementById("aiforgood").style.visibility = "visible";
            }}
            onMouseOut={() => {
              document.getElementById("aiforgood").style.visibility = "hidden";
            }}></div>
          {/* gap */}
          <div style={{ height: "5.1%" }}></div>
          {/* Peace Corps */}
          <div
            className={styles.experience}
            style={{ backgroundColor: "#004B97", borderColor: "#C2002F", height: "22.4%" }}
            onMouseOver={() => {
              document.getElementById("peace_corps").style.visibility = "visible";
            }}
            onMouseOut={() => {
              document.getElementById("peace_corps").style.visibility = "hidden";
            }}></div>
          {/* gap */}
          <div style={{ height: "3.4%" }}></div>
          {/* Lockheed */}
          <div
            className={styles.experience}
            style={{ backgroundColor: "#005DAA", borderColor: "#808285", height: "13.8%" }}
            onMouseOver={() => {
              document.getElementById("lockheed").style.visibility = "visible";
            }}
            onMouseOut={() => {
              document.getElementById("lockheed").style.visibility = "hidden";
            }}></div>
          {/* gap */}
          <div style={{ height: "6.9%" }}></div>
          {/* ON Semi */}
          <div
            className={styles.experience}
            style={{ backgroundColor: "#006C3F", borderColor: "#FFFFFF", height: "3.4%" }}
            onMouseOver={() => {
              document.getElementById("on").style.visibility = "visible";
            }}
            onMouseOut={() => {
              document.getElementById("on").style.visibility = "hidden";
            }}></div>
          {/* gap */}
          <div style={{ height: "18.1%" }}></div>
        </div>
        {/* education */}
        <div style={{ display: "flex", flexFlow: "column", flexGrow: "1", paddingLeft: "4px" }}>
          {/* gap */}
          <div style={{ height: "9.5%" }}></div>
          {/* CMU */}
          <div
            className={styles.experience}
            style={{ backgroundColor: "#C41230", borderColor: "#000000", height: "19%" }}
            onMouseOver={() => {
              document.getElementById("cmu").style.visibility = "visible";
            }}
            onMouseOut={() => {
              document.getElementById("cmu").style.visibility = "hidden";
            }}></div>
          {/* gap */}
          <div style={{ height: "26.7%" }}></div>
          {/* Cal Poly */}
          <div
            className={styles.experience}
            style={{ backgroundColor: "#154734", borderColor: "#BD8B13", height: "44.8%" }}
            onMouseOver={() => {
              document.getElementById("cal_poly").style.visibility = "visible";
            }}
            onMouseOut={() => {
              document.getElementById("cal_poly").style.visibility = "hidden";
            }}></div>
        </div>
      </div>
      {/* right */}
      <div style={{ width: "46%", marginLeft: "1%", display: "flex", flexFlow: "column", justifyContent: "space-between" }}>
        <ExperienceItem name="Deloitte" title="Data Engineer" timeRange="Jun. 2022 - Present" id="deloitte"></ExperienceItem>
        <ExperienceItem name="Carnegie Mellon University" title="M.S. Public Policy & Management, Data Analytics track" timeRange="Aug. 2020 - May 2022" id="cmu"></ExperienceItem>
        <ExperienceItem name="AI for Good Foundation" title="AI/Policy Research Fellow" timeRange="Oct. 2020 - Sep. 2021" id="aiforgood"></ExperienceItem>
        <ExperienceItem name="Peace Corps Costa Rica" title="Community Economic Development Volunteer" timeRange="Feb. 2018 - Mar. 2020" id="peace_corps"></ExperienceItem>
        <ExperienceItem name="Lockheed Martin" title="Information Technology Intern" timeRange="Jun. 2016 - Sep. 2017" id="lockheed"></ExperienceItem>
        <ExperienceItem name="ON Semiconductor" title="CAD Drafter Intern" timeRange="Jun. 2015 - Sep. 2015" id="on"></ExperienceItem>
        <ExperienceItem name="California State Polytechnic University" title="B.S Information Systems, minor Computer Science" timeRange="Sep. 2013 - Dec. 2017" id="cal_poly"></ExperienceItem>
      </div>
    </div>
  </Layout >
)

export default Experience