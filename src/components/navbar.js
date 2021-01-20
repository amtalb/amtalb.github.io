import React from "react"
import { Link } from "gatsby"
import { useMediaPredicate } from "react-media-hook"

import styles from "./navbar.module.scss"

function showNav() {
  const navList = document.getElementById("navList");
  const topNav = document.getElementById("topNav");
  const homeButton = document.getElementById("homeButton");
  const navFiller = document.getElementById("navFiller");

  if (navList.style.display === "block") {
    navList.style.display = "none";
    topNav.style.minHeight = "10vh";
    homeButton.style.display = "block";
    navFiller.style.flexGrow = "10";
  } else {
    navList.style.display = "block";
    topNav.style.minHeight = "30vh";
    homeButton.style.display = "none";
    navFiller.style.flexGrow = "0";
  }
}

const ListLink = props => (
  <li>
    <Link style={{ color: "#A9A9A9", fontSize: "20px", position: "relative" }} to={props.to}>{props.children}</Link>
  </li>
)

export default function NavBar() {
  const smallerThan600 = useMediaPredicate("(max-width:600px)");
  const smallerThan992 = useMediaPredicate("(max-width: 992px)");
  
  return (
    <div id="topNav" style= {{width: "100%",
                              minHeight: "10vh",
                              display: "flex",
                              alignItems: "center",
                              borderBottom: "3px solid black",
                              marginBottom: smallerThan992 ? "0" : "4vh"
                            }}>
      <Link id="homeButton" to="/" style={{ textShadow: `none`, backgroundImage: `none`, color: "black" }}>
        <h2>AT</h2>
      </Link>
      <div id="navFiller" style={{ flexGrow: 10 }}></div>
      <ul id="navList" style={{ margin: "0", 
                                padding: "0", 
                                display: smallerThan600 ? "none" : "block" 
                             }}>
        <ListLink to="/about/">About Me</ListLink>
        <ListLink to="/projects/">Projects</ListLink>
        <ListLink to="/resume/">Resume</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
      {smallerThan600 && <img id="navButton"
                              src="https://img.icons8.com/material-sharp/30/000000/menu.png"
                              style={{ position: "absolute", top: "2.5vh", right: "8vw", display: "block" }}
                              alt="Nav Icon" 
                              onClick={showNav}>
                          </img>
      }
    </div>
  )
}