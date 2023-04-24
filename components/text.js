import React from "react"
//import { useMediaPredicate } from "react-media-hook"

export default function Text({ children }) {
  //const smallerThan600 = useMediaPredicate("(max-width:600px)");
  //const smallerThan992 = useMediaPredicate("(max-width:992px)");

  return (
    <div id="text" style={{
      flexGrow: "1",
      display: "flex",
      alignItems: "start",
      flexFlow: "column",
      //width: smallerThan600 ? "100%" : "85%",
      //paddingTop: smallerThan992 ? "25px" : "2vh",
      overflowY: "auto",
      animation: "fadein 2s",
      WebkitAnimation: "fadein 2s", /* Safari, Chrome and Opera > 12.1 */
      MozAnimation: "fadein 2s", /* Firefox < 16 */
      msAnimation: "fadein 2s", /* Internet Explorer */
      OAnimation: "fadein 2s", /* Opera < 12.1 */
    }}>
      {children}
    </div>
  )
}