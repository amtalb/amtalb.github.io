import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import avatar from "../images/linus.jpg"

export default function Bio() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author {
              name
              summary
            }
          }
        }
      }
    `
  )
  console.log(data)
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <img
        src={avatar}
        alt={data.site.siteMetadata.author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: rhythm(3),
          height: rhythm(3),
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{data.site.siteMetadata.author.name}</strong> {data.site.siteMetadata.author.summary}
      </p>
    </div>
  )
}