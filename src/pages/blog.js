import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import PostComponent from "../components/post-component"

import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: {fields: publishedDate, order: DESC} limit: 4){
        edges {
          node {
            id
            title
            slug
            publishedDate(formatString: "MMMM Do,  YYYY")
            body{
              json
            }
            topPic{
             fluid(maxWidth: 100, maxHeight: 70) {
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
      <SEO title="Blog" keywords={['blog', 'devon anderson', 'Web Developer', 'Software Engineer']}/>
      <div style={{color: 'white'}}>
        {
          data.allContentfulBlogPost.edges.map(({node}) => (
            <div className="container card_container" key={node.id}>
              <PostComponent
                title={node.title}
                date={node.publishedDate}
                slug={node.slug}
                body={documentToReactComponents(node.body.json)}
                fluid={node.topPic.fluid}
              />
            </div>
        ))
        }
      </div>
    </Layout>
  )

}

export default BlogPage
