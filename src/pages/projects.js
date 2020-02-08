import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import ProjectCard from "../components/project-card"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"



 const ServicesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjectContent {
        edges {
          node {
            id
            message{
              json
            }
            topper {
              fluid(maxWidth: 200) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1 className="projects_heading">Coming Soon...</h1>
      {
        data.allContentfulProjectContent.edges.map(({node}) => (
          <ProjectCard 
            fluid={node.topper.fluid}
            message={documentToReactComponents(node.message.json)}
            key={node.id}
          />
          
        ))
      }
    </Layout>
  )
 }
 
export default ServicesPage;