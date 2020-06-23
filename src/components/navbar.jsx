import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from "react-router-dom";
import {
    Button,
    Navbar,
    Form,
    Nav,
  } from "react-bootstrap";
class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Navbar variant="dark" position="fixed" style={{ backgroundColor:" #0e0e0e"}}>
                <Nav className="mr-auto" style={{marginLeft:"30px", marginRight:"60px"}}>
                <Nav.Link as={Link} to="/home" style={{fontFamily:"Roboto Thick, sans-serif", fontWeight:"200", paddingRight:"20px"}} >Home</Nav.Link>
                <Nav.Link as={Link} to="/dashboard" style={{fontFamily:"Roboto Thick, sans-serif", fontWeight:"200", paddingRight:"20px"}}>Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/latestupdates" href="#updates" style={{fontFamily:"Roboto Thick, sans-serif", fontWeight:"200", paddingRight:"20px"}} >Latest Updates</Nav.Link>
                <Nav.Link href="#volunteer" style={{fontFamily:"Roboto Thick, sans-serif", fontWeight:"200", paddingRight:"20px"}}>Volunteer</Nav.Link>
                <Nav.Link href="#seekassistance" style={{fontFamily:"Roboto Thick, sans-serif", fontWeight:"200", paddingRight:"20px"}}>Seek Assistance</Nav.Link>
                <Nav.Link href="#resources" style={{fontFamily:"Roboto Thick, sans-serif", fontWeight:"200", paddingRight:"20px"}}>Resources</Nav.Link>
                </Nav>
                <Form inline style={{marginRight:"30px"}}>
                <Button as={Link} to="/signin" href="#signin" variant="outline-info" style={{fontFamily:"Roboto Thick, sans-serif", fontWeight:"200", border:"transparent", padding:"11px"}}>Sign In</Button>
                <Button as={Link} to="/register"href="#register" variant="outline-info" style={{fontFamily:"Roboto Thick, sans-serif", fontWeight:"200", padding:"10px"}} >Register</Button>
                </Form>
            </Navbar>
            </div>
                 
         );
    }
}
export default NavBar;