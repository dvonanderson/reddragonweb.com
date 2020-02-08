import React from 'react'
import Img from "gatsby-image";
import { Card, Fade} from "reactstrap"

class ProjectCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {fadeIn: false}
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    })
  }

  render(){
    const { fluid, message} = this.props;
    return(
      <>
      <div>
        <div>
          <Card className="projects_card" onClick={this.toggle}>
            <Img fluid={fluid} className="projects_card--image"/>
          </Card>
        </div>
        <hr/>
        <div className="projects_card--message">
          <Fade in={this.state.fadeIn} tag="h4">  
            {message}
          </Fade>
        </div>
      </div>
        
      </>  
    )
  }
}

export default ProjectCard;