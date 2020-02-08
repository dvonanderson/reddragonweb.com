import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import ComputerLogo from "../../static/images/001-computer.png";
import DevelopmentLogo from "../../static/images/007-tv.png";
import FlaskLogo from "../../static/images/003-flask.png";
import SEOLogo from "../../static/images/004-search.png";
import DesignLogo from "../../static/images/005-pen.png";
import ConversionLogo from "../../static/images/006-order.png";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardDeck,
  Tooltip
} from 'reactstrap';

export default class ServicesPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      tooltipOpen: false
    }
  }


toggle() {
  this.setState({tooltipOpen: !this.state.tooltipOpen});
}

  render() {
    return (
      <Layout>
        <SEO title="Services" keywords={['services', 'devon anderson', 'developer', 'engineer', 'web development']}/>
        <div className="services_container">
          <h1 className="services_title">Services</h1>
          <CardDeck className="mt-4">
            <Card className="services_card">
              <CardImg top width="100%" src={SEOLogo} alt="SEO Logo" className="services_card--image" id="FlaticonReference"/>
              <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="FlaticonReference" toggle={this.toggle}>
                <div className='reference_tooltip'>Icons made by
                  <br/><a href="https://www.flaticon.com/authors/maxim-basinski" title="Maxim Basinski" rel="noopener noreferrer">Maxim Basinski</a><br/> from
                  <br/><a href="https://www.flaticon.com/" title="Flaticon" rel="noopener noreferrer">www.flaticon.com</a> messages attribution is licensed by
                  <br/><a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a>
                </div>
              </Tooltip>
              <CardBody>
                <CardTitle className="services_card--title">seo <br/> optimization</CardTitle>
                <CardText>With the correct Search Engine Optimization (SEO) tatics, over time we can increase the quality and quantity of the traffic that comes to your webapp.</CardText>
              </CardBody>
            </Card>
            <Card className="services_card">
                <CardImg top width="100%" src={ConversionLogo} alt="Conversion Logo" className="services_card--image" />
              <CardBody>
                <CardTitle className="services_card--title">conversion optimization</CardTitle>
                <CardText>With an aggressive and effected CRO plan, we can help you understand how to turn normal webapp visitors in to retained and returning customers.</CardText>
              </CardBody>
            </Card>
            <Card className="services_card">
                <CardImg top width="100%" src={ComputerLogo} alt="Computer Logo" className="services_card--image" />
              <CardBody>
                <CardTitle className="services_card--title">web/app development</CardTitle>
                <CardText>From conception to deployment, <span className="services_card_span"><span className="services_card_span_color-change">Red</span>Dragon Web</span> can help. Do you have an existing website or webapp, that may need updating?  Let us help!</CardText>
              </CardBody>
            </Card>
          </CardDeck>
        </div>

        <hr />

        <div className="process_container">
          <h1 className="process_title">The Process</h1>
          <CardDeck className="mt-4">
            <Card className="process_card">
                <CardImg top width="100%" src={FlaskLogo} alt="Flask Logo" className="process_card--image" />
              <CardBody>
                <CardTitle className="process_card--title">Research</CardTitle>
                <CardText>Understand the client’s subject matter completely.  Determine methods to address the specific customer’s needs and requirements.</CardText>
              </CardBody>
            </Card>
            <Card className="process_card">
                <CardImg top width="100%" src={DesignLogo} alt="Design Logo" className="process_card--image" />
              <CardBody>
                <CardTitle className="process_card--title">Design</CardTitle>
                <CardText>Often the design process is overlooked but, design actually encompasses a lot more. It is a cross functional process that includes market research, technical research, design of a concept, and prototype mockup.</CardText>
              </CardBody>
            </Card>
            <Card className="process_card">
                <CardImg top width="100%" src={DevelopmentLogo} alt="Development Logo" className="process_card--image" />
              <CardBody>
                <CardTitle className="process_card--title">Develop</CardTitle>
                <CardText>Findings from the research and design phases are utilized for the production of specific products including materials, systems, and methods. Engineer the solution utilizing the research and designs to produce awesome products for the customer.</CardText>
              </CardBody>
            </Card>
          </CardDeck>
        </div>
      </Layout>
    )
  }
}
