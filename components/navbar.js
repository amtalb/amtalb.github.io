import Link from 'next/link'

import styles from "./navbar.module.scss"

// adapted from https://webplatform.github.io/docs/tutorials/animation_in_javascript_2/
function changeColors(startcolor, endcolor, type) {
  var element;
  if (type === "bg") {
    element = document.getElementsByTagName("MAIN")[0];
  } else if (type === "nav") {
    var nav;
    nav = document.getElementsByTagName("NAV")[0];
    element = nav.getElementsByTagName("LI");
  }

  const steps = 40;

  var red_change = (startcolor[0] - endcolor[0]) / steps;
  var green_change = (startcolor[1] - endcolor[1]) / steps;
  var blue_change = (startcolor[2] - endcolor[2]) / steps;
  var currentcolor = startcolor;
  var stepcount = 0;

  var timer = setInterval(function () {
    currentcolor[0] = parseInt(currentcolor[0] - red_change);
    currentcolor[1] = parseInt(currentcolor[1] - green_change);
    currentcolor[2] = parseInt(currentcolor[2] - blue_change);
    if (type === "bg") {
      element.style.backgroundColor = 'rgb(' + currentcolor.toString() + ')';
    } else if (type === "nav") {
      for (var i = 0; i < element.length; i++) {
        element[i].children[0].style.color = 'rgb(' + endcolor.toString() + ')';
      }
    }

    stepcount += 1;

    if (stepcount >= steps) {
      if (type === "bg") {
        element.style.backgroundColor = 'rgb(' + endcolor.toString() + ')';
      } else if (type === "nav") {
        for (var j = 0; j < element.length; j++) {
          element[j].children[0].style.color = 'rgb(' + endcolor.toString() + ')';
        }
      }
      clearInterval(timer);
    }
  }, 5);
}

function showNav() {
  const navList = document.getElementById("navList");
  const topNav = document.getElementById("topNav");
  const homeButton = document.getElementById("homeButton");
  const navFiller = document.getElementById("navFiller");

  if (navList.style.display === "block") {
    navList.style.display = "none";
    topNav.style.minHeight = "10vh";
    topNav.style.paddingTop = "0px";
    homeButton.style.display = "block";
    navFiller.style.flexGrow = "10";
  } else {
    navList.style.display = "block";
    topNav.style.minHeight = "15vh";
    topNav.style.paddingTop = "15px";
    homeButton.style.display = "none";
    navFiller.style.flexGrow = "0";
  }
}

export default function NavBar() {
  //const smallerThan600 = useMediaPredicate("(max-width:600px)");
  //const smallerThan992 = useMediaPredicate("(max-width: 992px)");

  return (
    <div id={styles.topNav} style={{
      width: "100%",
      minHeight: "10vh",
      display: "flex",
      flexFlow: "column",
      borderBottom: "3px solid black",
      //marginBottom: smallerThan992 ? "0" : "1rem"
    }}>
      <div>
        <Link id={styles.homeButton} href="/" style={{ textShadow: `none`, backgroundImage: `none`, color: "black" }}>
          <h1>Alexander Talbott</h1>
        </Link>
        <div id="navFiller" style={{ flexGrow: 10 }}></div>
      </div>
      <div>
        <nav className={styles.navbar}>
          <ul id={styles.navList} style={{
            marginBottom: "1rem",
            padding: "0",
            //display: smallerThan600 ? "none" : "block",
          }}>
            <li className={styles.navListItem}>
              <Link href="/projects/"
                className={styles.navLinks}
                onMouseOver={() => {
                  changeColors([255, 255, 240], [223, 54, 124], 'bg');
                  changeColors([169, 169, 169], [36, 123, 160], 'nav')
                }
                }
                onMouseOut={() => {
                  changeColors([223, 54, 124], [255, 255, 240], 'bg');
                  changeColors([36, 123, 160], [169, 169, 169], 'nav')
                }
                }
                onFocus={() => {
                  changeColors([255, 255, 240], [223, 54, 124], 'bg');
                  changeColors([169, 169, 169], [36, 123, 160], 'nav')
                }
                }
                onBlur={() => {
                  changeColors([223, 54, 124], [255, 255, 240], 'bg');
                  changeColors([36, 123, 160], [169, 169, 169], 'nav')
                }
                }
              >
                Projects
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link href="/experience/"
                className={styles.navLinks}
                onMouseOver={() => {
                  changeColors([255, 255, 240], [10, 129, 209], 'bg');
                  changeColors([169, 169, 169], [244, 235, 232], 'nav')
                }
                }
                onMouseOut={() => {
                  changeColors([10, 129, 209], [255, 255, 240], 'bg');
                  changeColors([244, 235, 232], [169, 169, 169], 'nav')
                }
                }
                onFocus={() => {
                  changeColors([255, 255, 240], [10, 129, 209], 'bg');
                  changeColors([169, 169, 169], [244, 235, 232], 'nav')
                }
                }
                onBlur={() => {
                  changeColors([10, 129, 209], [255, 255, 240], 'bg');
                  changeColors([244, 235, 232], [169, 169, 169], 'nav')
                }
                }
              >
                Experience
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link href="/skills/"
                className={styles.navLinks}
                onMouseOver={() => {
                  changeColors([255, 255, 240], [120, 120, 120], 'bg');
                  changeColors([169, 169, 169], [0, 0, 0], 'nav')
                }
                }
                onMouseOut={() => {
                  changeColors([120, 120, 120], [255, 255, 240], 'bg');
                  changeColors([0, 0, 0], [169, 169, 169], 'nav')
                }
                }
                onFocus={() => {
                  changeColors([255, 255, 240], [120, 120, 120], 'bg');
                  changeColors([169, 169, 169], [0, 0, 0], 'nav')
                }
                }
                onBlur={() => {
                  changeColors([120, 120, 120], [255, 255, 240], 'bg');
                  changeColors([0, 0, 0], [169, 169, 169], 'nav')
                }
                }
              >
                Skills
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link href="/lists/"
                className={styles.navLinks}
                onMouseOver={() => {
                  changeColors([255, 255, 240], [255, 208, 70], 'bg');
                  changeColors([169, 169, 169], [36, 30, 78], 'nav')
                }
                }
                onMouseOut={() => {
                  changeColors([255, 208, 70], [255, 255, 240], 'bg');
                  changeColors([36, 30, 78], [169, 169, 169], 'nav')
                }
                }
                onFocus={() => {
                  changeColors([255, 255, 240], [255, 208, 70], 'bg');
                  changeColors([169, 169, 169], [36, 30, 78], 'nav')
                }
                }
                onBlur={() => {
                  changeColors([255, 208, 70], [255, 255, 240], 'bg');
                  changeColors([36, 30, 78], [169, 169, 169], 'nav')
                }
                }
              >
                Lists
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link href="/travel/"
                className={styles.navLinks}
                onMouseOver={() => {
                  changeColors([255, 255, 240], [83, 145, 126], 'bg');
                  changeColors([169, 169, 169], [235, 156, 92], 'nav')
                }
                }
                onMouseOut={() => {
                  changeColors([83, 145, 126], [255, 255, 240], 'bg');
                  changeColors([235, 156, 92], [169, 169, 169], 'nav')
                }
                }
                onFocus={() => {
                  changeColors([255, 255, 240], [83, 145, 126], 'bg');
                  changeColors([169, 169, 169], [235, 156, 92], 'nav')
                }
                }
                onBlur={() => {
                  changeColors([83, 145, 126], [255, 255, 240], 'bg');
                  changeColors([235, 156, 92], [169, 169, 169], 'nav')
                }
                }
              >
                Travel
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {
        //smallerThan600 && <img id="navButton"
        //src="https://img.icons8.com/material-sharp/30/000000/menu.png"
        //style={{ position: "absolute", top: "2.5vh", right: "8vw", display: "block" }}
        //alt="Nav Icon"
        //</div>onClick={showNav}>
        //</img>
      }
    </div >
  )
}
