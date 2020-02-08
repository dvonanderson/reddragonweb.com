import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeadshotImage from "../components/head-shot"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import {
  Row,
  Col,
} from "reactstrap";

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={['about', 'devon anderson', 'developer', 'Software Engineer', 'Athens Georgia', 'Web Developer']}/>
    <Row className="about-container">
      <Col md="4">
        <HeadshotImage className="about-container__headshot"/>
      </Col>
      <Col md="8" className="about-container__description">
        <h2 className="about-container__description__header">Welcome to <span className="about-container__description__header-span"><span className="about-container__description__header-span__first">Red</span>Dragon Web</span></h2>
        <p className="about-container__description__para">Red Dragon Web is a digital platform solutions firm that specializes in web/app consultancy.  We can provide marketing features like logo design, SEO optimization, conversion rate optimization, and web/app design, development and deployment.</p>
        <p className="about-container__description__para">Hello my name is Devon! I'm a full-stack developer with a passion for web/app design and development. I have worked in the digital content industry over the years in various capacities gaining experience in a range of skills from design and development. With a focus on visual design, my goal is to make the end user experience satisfactory, with clean and understandable user interface(UI) and logic.</p>
        <p className="about-container__description__para mt-3">Other than coding, I enjoy hanging out with my beautiful family, and watching football.{' '}<span style={{color: 'red'}}>Go Dawgs!</span></p>
        < p className = "about-container__description__para mt-3">Got a project in mind or have a question? Send me an email and lets chat!</p>
        <Link to="/contact">
          <FontAwesomeIcon icon={faMailBulk} size="3x" className="about-container__description__mail"/>
        </Link>
      </Col>
    </Row>
  </Layout>
)

export default AboutPage
