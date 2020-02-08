import React from 'react'
import Layout from "../components/layout";
import SEO from "../components/seo";

import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import CoffeeComputer from "../../static/images/black-and-white-coffee.jpg";

class ContactPage extends React.Component {
  state = {
    contactName: "",
    email: "",
    message: "",
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <Layout>
        <SEO title="Home" keywords={['gatsby', 'devon anderson', 'web developer', 'Software Engineer', 'Athens Georgia', 'react', 'contact page']}/>
        <Form  name="contact" method="post" action="https://formspree.io/dvonanderson@gmail.com" className="contact_form--body">
        <img src = { CoffeeComputer } className="contact_form--image" alt="Coffee and Computer"/>
          <FormGroup>
            <Label for="formName">Name</Label>
            <Input type="text"
              name="contactName"
              id="formName"
              value={this.state.name}
              onChange={e => this.change(e)}/>
          </FormGroup>
          <FormGroup>
            <Label for="formEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="formEmail"
              value={this.state.email}
              onChange={e => this.change(e)}/>
          </FormGroup>
          <FormGroup>
            <Label for="formMessage">Message</Label>
            <Input
              type="textarea"
              name="message"
              id="formMessage"
              value={this.state.message}
              onChange={e => this.change(e)}/>
          </FormGroup>
          <Button color="primary" size="lg">Send</Button>
        </Form>
      </Layout>

    )
  }
}

export default ContactPage;
