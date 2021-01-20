import React from "react"
import { Link } from "gatsby"

import NavBar from "../components/navbar"
import Layout from "../components/layout"
import Text from "../components/text"

const About = () => (
  <Layout>
    <NavBar></NavBar>
    <Text>
      <h1>About Me</h1>
      <p>
        Hey I'm Alex! I am originally from Omaha, Nebraska (although I'm not a Cornhusker fan, Iowa State rather, go 'Clones!). I went to
        college in California and graduated with a degree in Information Systems and a minor in Computer Science. Now, I am an aspiring 
        graduate student looking to study Public Policy and Data Analytics. I'm  a huge nerd for technology and stats
        and I find the recent advances in Artifical Intelligence and Machine Learning to be fascinating. That in combination with a 
        strong passion for helping others has led me to seek a career using technology to solve global dilemmas. 
      </p>
      <p>
        On my own time, I spend a lot of time out in nature exploring. I like hiking and trail-running and I am always on the lookout
        for interesting plants and wildlife. When I am not outside, I am typically learning something new. I have self-studied many topics,
        basically anything that piques my interest, but I particularly love reading about history; I always have about a million Wikipedia
        tabs open. I also love to cook. I try to recreate delicious meals I have had in restaurants and I have a particular affinity towards 
        East Asian cuisine.
      </p>
      <p>
        Currently, I am serving in the Peace Corps in Costa Rica. Check that out <a href="https://pccr.alexandermtalbott.com/" 
        target="_blank" rel="noreferrer">here</a>. My main goal for right now is to get accepted into a grad program that I love and start researching topics that 
        are interesting to me. Thinking longer term, I would like to pursue a Ph.D. and lead a research-based career. More personally, I'd 
        like to continue to travel and to learn at least a couple more languages (human and programming). 
      </p>
      <p>
        If you would like to get in touch with me about an opportunity, a project, or the best way to cook a steak, check out the <Link to="/contact/">Contact</Link> page.
      </p>
    </Text>
  </Layout>
)

export default About 
