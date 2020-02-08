import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';


const activeStyles = {
  color: '#F17300',
  fontWeight: 'bold',
  textDecoration: 'none'
}

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return(
      <div>
        <Navbar fixed="top" light expand="md">
          <NavbarBrand href="/" aria-label="Unused Brand"></NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="mr-3 header_nav">
                <Link to="/" activeStyle={activeStyles}>Home</Link>
              </NavItem>
              <NavItem className="mr-3 header_nav">
                <Link to="/about" activeStyle={activeStyles}>About</Link>
              </NavItem>
              <NavItem className="mr-3 header_nav">
                <Link to="/services" activeStyle={activeStyles}>Services</Link>
              </NavItem>
              <NavItem className="mr-3 header_nav">
                <Link to="/projects" activeStyle={activeStyles}>Projects</Link>
              </NavItem>
              <NavItem className="mr-3 header_nav">
                <Link to="/contact" activeStyle={activeStyles}>Contact</Link>
              </NavItem>
              <NavItem className="header_nav">
                <Link to="/blog" activeStyle={activeStyles}>Blog</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
