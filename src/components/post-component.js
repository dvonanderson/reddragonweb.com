import React from 'react'
import { Link } from "gatsby";
import Img  from "gatsby-image";
import { Row, Col,Card, CardBody, CardTitle, CardSubtitle} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";

const PostComponent = ({title, date, slug, fluid}) => (
  <Card className="card">
    <CardBody className="card--body">
      <Row>
        <Col md="4">
          <Link to={`/blog/${slug}`}>
            <Img fluid={fluid} className="card--thumbnail"/>
          </Link>
        </Col>
        <Col md="8" className="card--right">
          <CardTitle className=" mt-3">
            <Link to={`/blog/${slug}`} className="card--title">
              {title}
            </Link>
          </CardTitle>
          <CardSubtitle>
            <span className="text-white">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2"/>{date}
            </span> 
          </CardSubtitle>
          <Link to={`/blog/${slug}`} className="btn btn-primary left mt-3 card--more">Read more...</Link>
        </Col>
      </Row>
    </CardBody>
  </Card>
)

export default PostComponent;