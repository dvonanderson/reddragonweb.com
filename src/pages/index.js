import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image";
// import Fade from "react-reveal/Fade";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulIndexImage {
        image {
          fluid(maxWidth: 1200) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home"
      keywords={
        ['gatsby', 'devon anderson', 'react', 'red dragon web', 'web development', 'app development', 'ui and ux design']
        }/>
      <div className="home-page">
        <Img fluid={data.contentfulIndexImage.image.fluid} className="home-page__home-image"/>
        <div className="home-page__descript">
          <h1 className="home-page__descript__logo-title"><span>Red</span>Dragon Web</h1>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
