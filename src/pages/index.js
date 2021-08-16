import React from "react"

import Layout from "../components/layout"
import NavBar from "../components/navbar"

import profileImg from "../images/profile.jpg"
import linusImg from "../images/linus.jpg"

const IndexPage = () => (
  <Layout>
    <NavBar></NavBar>
    <img src={profileImg} alt="profile" style={{ margin: "0 auto", borderRadius: "12%", width: "100%", paddingBottom: "15px" }} />
    <p>
      I am a graduate student at Carnegie Mellon studying Public Policy and Data Analytics. I am
      especially motivated to study data science for social good, and policy and political science. I received my undergrad from Cal Poly
      in Information Systems and I served in the Peace Corps in Costa Rica from 2018-2020.
      On my own time, I enjoy being out in nature, learning something new, cooking, and spending time with my cat, Linus.
      My career goals are to utilize technology for social good and to focus on policy research/development.
    </p>
    <img src={linusImg} alt="linus" style={{ margin: "0 auto", borderRadius: "15%", width: "65%", paddingBottom: "15px" }} />
    <p>
      If you would like to get in touch with me about an opportunity or project, check out my contact info in the
      footer.
    </p>
  </Layout>
)

export default IndexPage
