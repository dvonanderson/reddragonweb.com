import React from 'react'
import Layout from "../components/layout";
import Img  from "gatsby-image";
import { graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Row } from "reactstrap"
import { css } from 'emotion'
import {FaTwitter} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {
  ShareButtonRectangle,
  ShareBlockStandard
} from 'react-custom-share'
import Helmet from "react-helmet"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      slug
      publishedDate(formatString: "MMMM Do YYYY")
      topPic{
        fluid(maxWidth: 1200) {
          ...GatsbyContentfulFluid
        }
      }
      body{
        json
      }
    }
  }
`

const SinglePagePost = (props) => {
  const currentUrl = `https://www.reddragonweb.com/blog/${props.data.contentfulBlogPost.slug}`
  const shareBlockProps = {
    url: currentUrl,
    button: ShareButtonRectangle,
    buttons: [
      { network: 'Twitter', icon: FaTwitter },
      { network: 'Facebook', icon: FaFacebook },
    ],
    text: `Check out this blog post by Devon Anderson for - reddragonweb.com`
  }
  const options ={
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img className="single_post--image" alt={alt} src={url}/>
      }
    }
  }


  return (
    <Layout style={{color: 'white'}}>
      <Helmet><title>Post | {props.data.contentfulBlogPost.title}</title></Helmet>
      <div className="single_post--image-container">
        <Img fluid={props.data.contentfulBlogPost.topPic.fluid} />
      </div>

      <h1 className="single_page--title mt-3">{props.data.contentfulBlogPost.title}</h1>
      <Row className="single_post--info">
        <Col md="6" >
          <div className="single_post--date">
            <FontAwesomeIcon icon={faCalendarAlt}/>{ ' ' }Post on:{ ' ' }{props.data.contentfulBlogPost.publishedDate}
          </div>
        </Col>
        <Col md="6">
          <div className="single_post--share">
              <div className="single_post--icons">
                Share this post: { ' ' }
                <div className="ml-4">
                  <ShareBlockStandard {...shareBlockProps}
                    className={css`

                    `} />
                </div>
              </div>
          </div>
        </Col>
      </Row>
      <div className="single_post--body single_post--para mt-4">
        {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
      </div>
    </Layout>
  )
}

export default SinglePagePost;
