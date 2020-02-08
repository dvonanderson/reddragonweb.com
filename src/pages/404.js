import React from "react"
import SEO from "../components/seo"
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulErrorPage {
        image {
          fluid(maxWidth: 1800) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'devon anderson', 'Web developer', 'Athens Georgia','react', '404 page', 'Software Engineer']}/>
      <Img fluid={data.contentfulErrorPage.image.fluid}/>
    </Layout>



  )
}

export default NotFoundPage
