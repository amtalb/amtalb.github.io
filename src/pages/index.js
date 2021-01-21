import React from "react"

import Layout from "../components/layout"
import NavBar from "../components/navbar"

import profileImg from "../images/profile.jpg"

const IndexPage = () => (
  <Layout>
    <NavBar></NavBar>
    <img src={profileImg} alt="profile" style={{ margin: "0 auto", borderRadius: "5%", width: "100%", paddingBottom: "15px" }} />
    <p>
      Hey, I'm Alex! I am from Omaha, Nebraska (although I'm an Iowa State fan, go 'Clones!). I went to college in California and graduated
      with a degree in Information Systems and a minor in Computer Science. I served in the Peace Corps in Costa Rica for two years which
      was the most awesome experience of my life. Now, I am a graduate student in Public Policy and Data Analytics at Carnegie Mellon. I am
      especially motivated to study artificial intelligence, data science for social good, and technology ethics.
    </p>
    <p>
      On my own time, I enjoy being out in nature, learning something new (I'm a huge history buff as you'll see in my blog), cooking, and
      spending time with my cat.
      My main goal for the future is to learn a lot while I'm in grad school and have fun doing it. Thinking longer term, I would like to pursue
      a Ph.D. and lead a research-based career. More personally, I'd like to continue to travel and to learn at least a couple more languages
      (human and programming).
    </p>
    <p>
      If you would like to get in touch with me about an opportunity, a project, or the best way to cook a steak, check out my contact info in the
      footer.
    </p>
  </Layout>
)

export default IndexPage
