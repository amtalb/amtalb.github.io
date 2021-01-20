import React from "react"
import { Link } from "gatsby"
import styles from "./index.module.scss"

import Layout from "../components/layout"

// adapted from https://webplatform.github.io/docs/tutorials/animation_in_javascript_2/
function changeColors(startcolor, endcolor, type) {
  var element;
  if (type === "bg") {
    element = document.getElementById("container");
  } else if (type === "initials") {
    element = document.getElementById("initials");
  } else if (type === "nav") {
    element = document.getElementsByClassName("navListItem");
  }

  const steps = 40;

  var red_change = (startcolor[0] - endcolor[0]) / steps;
  var green_change = (startcolor[1] - endcolor[1]) / steps;
  var blue_change = (startcolor[2] - endcolor[2]) / steps;
  var currentcolor = startcolor;
  var stepcount = 0;

  var timer = setInterval(function(){
      currentcolor[0] = parseInt(currentcolor[0] - red_change);
      currentcolor[1] = parseInt(currentcolor[1] - green_change);
      currentcolor[2] = parseInt(currentcolor[2] - blue_change);
      if (type === "bg") {
        element.style.backgroundColor = 'rgb(' + currentcolor.toString() + ')';
      } else if (type === "initials") {
        element.style.color = 'rgb(' + currentcolor.toString() + ')';
      } else if (type === "nav") {
        for (var i=0;i<element.length;i++) {
          element[i].children[0].style.color = 'rgb(' + endcolor.toString() + ')';
        }
      }

      stepcount += 1;

      if (stepcount >= steps) {
          if (type === "bg") {
            element.style.backgroundColor = 'rgb(' + endcolor.toString() + ')';
          } else if (type === "initials") {
            element.style.color = 'rgb(' + endcolor.toString() + ')';
          } else if (type === "nav") {
            for (var j=0;j<element.length;j++) {
              element[j].children[0].style.color = 'rgb(' + endcolor.toString() + ')';
            }
          }
          clearInterval(timer);
      }
  }, 5);
}

const IndexPage = () => (
  <Layout>
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flexGrow: "1" }}>
    <h1>Alexander Talbott</h1>
    <nav className={styles.navbar}>
      <ul>
        <li className="navListItem">
          <Link to="/about/" 
                className={styles.navLinks}
                onMouseOver={() => {changeColors([240,234,214], [44,234,163], 'bg'); 
                                    changeColors([229,219,185], [34,72,112], 'initials');
                                    changeColors([169,169,169],[244,241,187], 'nav')}
                            }
                onMouseOut={() => {changeColors([44,234,163], [240,234,214], 'bg');
                                   changeColors([34,72,112], [229,219,185], 'initials');
                                   changeColors([244,241,187], [169,169,169], 'nav')}
                           }
                onFocus={() => {changeColors([240,234,214], [44,234,163], 'bg'); 
                                changeColors([229,219,185], [34,72,112], 'initials');
                                changeColors([169,169,169],[244,241,187], 'nav')}
                        }
                onBlur={() => {changeColors([44,234,163], [240,234,214], 'bg');
                               changeColors([34,72,112], [229,219,185], 'initials');
                               changeColors([244,241,187], [169,169,169], 'nav')}
                       }
                >
            <span>&#7862;</span>
            bout Me
          </Link>
        </li>
        <li className="navListItem">
          <Link to="/projects/" 
                className={styles.navLinks}
                onMouseOver={() => {changeColors([240,234,214], [223,54,124], 'bg');
                                    changeColors([229,219,185], [237,125,58], 'initials');
                                    changeColors([169,169,169],[36,123,160], 'nav')}
                            }
                onMouseOut={() => {changeColors([223,54,124], [240,234,214], 'bg');
                                   changeColors([237,125,58], [229,219,185], 'initials');
                                   changeColors([36,123,160], [169,169,169], 'nav')}
                           }
                onFocus={() => {changeColors([240,234,214], [223,54,124], 'bg');
                                changeColors([229,219,185], [237,125,58], 'initials');
                                changeColors([169,169,169],[36,123,160], 'nav')}
                            }
                onBlur={() => {changeColors([223,54,124], [240,234,214], 'bg');
                               changeColors([237,125,58], [229,219,185], 'initials');
                               changeColors([36,123,160], [169,169,169], 'nav')}
                           }
                
                >
                <span>&#42832;</span>rojects</Link>
        </li>
        <li className="navListItem">
          <Link to="/resume/" 
                className={styles.navLinks}
                onMouseOver={() => {changeColors([240,234,214], [255,208,70], 'bg');
                                    changeColors([229,219,185], [150,2,0], 'initials');
                                    changeColors([169,169,169],[36,30,78], 'nav')}
                            }
                onMouseOut={() => {changeColors([255,208,70], [240,234,214], 'bg');
                                   changeColors([150,2,0], [229,219,185], 'initials');
                                   changeColors([36,30,78], [169,169,169], 'nav')}
                           }
                onFocus={() => {changeColors([240,234,214], [255,208,70], 'bg');
                                changeColors([229,219,185], [150,2,0], 'initials');
                                changeColors([169,169,169],[36,30,78], 'nav')}
                        }
                onBlur={() => {changeColors([255,208,70], [240,234,214], 'bg');
                               changeColors([150,2,0], [229,219,185], 'initials');
                               changeColors([36,30,78], [169,169,169], 'nav')}
                       }
                >
                <span>&#42918;</span>esume</Link>
        </li>
        <li className="navListItem">
          <Link to="/contact/" 
                className={styles.navLinks}
                onMouseOver={() => {changeColors([240,234,214], [10,129,209], 'bg');
                                    changeColors([229,219,185], [106,62,55], 'initials');
                                    changeColors([169,169,169],[244,235,232], 'nav')}
                            }
                onMouseOut={() => {changeColors([10,129,209], [240,234,214], 'bg');
                                   changeColors([106,62,55], [229,219,185], 'initials');
                                   changeColors([244,235,232], [169,169,169], 'nav')}
                           }
                onFocus={() => {changeColors([240,234,214], [10,129,209], 'bg');
                                changeColors([229,219,185], [106,62,55], 'initials');
                                changeColors([169,169,169],[244,235,232], 'nav')}
                        }
                onBlur={() => {changeColors([10,129,209], [240,234,214], 'bg');
                               changeColors([106,62,55], [229,219,185], 'initials');
                               changeColors([244,235,232], [169,169,169], 'nav')}
                       }
                >
                <span>&#199;</span>ontact</Link>
        </li>
      </ul>
      <h1 id="initials" style={{position: "absolute",
                                bottom: "25px",
                                right: "25px",
                                fontSize: "25vw",
                                lineHeight: "21vw",
                                overflowY: "hidden",
                                color: "#F6EAD9",
                                margin: "0",
                                padding: "0" }}>
    AT</h1>
    </nav>
    </div>
  </Layout>
)

export default IndexPage