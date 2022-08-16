import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import "../styles/global.css"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h2>{title}</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Project</Link>
      </div>
    </nav>
  )
}
