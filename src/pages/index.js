import React from "react"

import Layout from "../components/layout"
import NavBar from "../components/navbar"

import profileImg from "../images/profile.jpg"
import linusImg from "../images/linus.jpg"

const IndexPage = () => (
  <Layout>
    <NavBar></NavBar>
    <img src={profileImg} alt="Profile" style={{ margin: "0 auto", borderRadius: "12%", width: "100%", paddingBottom: "15px" }} />
    <p>
      I am a Data Science Consultant at Deloitte Government and Public Sector currently serving a federal health client in a data engineering role. I am
      especially motivated to learn new technologies and use my skills for a good cause. I received my undergrad from Cal Poly
      in Information Systems and served in the Peace Corps in Costa Rica from 2018-2020.
      On my own time, I enjoy being out in nature, rock climbing, cooking, video games, and spending time with my cats.
    </p>
    <p>
      If you would like to get in touch with me about an opportunity or project, check out my contact info in the
      footer.
    </p>
    <img src={linusImg} alt="Linus" style={{ margin: "0 auto", borderRadius: "15%", width: "65%", paddingBottom: "15px" }} />

  </Layout>
)

export default IndexPage
