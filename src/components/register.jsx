import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

class Register extends Component {
    state = {  }
    render() { 
        return ( 
           
                <div style={{ height:"300px", width:"450px", margin:"0 auto"}}>
                
                <div style={{marginTop:"10px"}}>
                    <Jumbotron style={{alignSelf:"center", position:"center", 
                                        backgroundColor:"#0e0e0e"}}>
                    <h1 style={{fontFamily:"Roboto , sans-serif", 
                                textAlign:"center", color:"#7d7d7d", 
                                fontWeight:"0", fontSize:"3.5em", 
                                outlineStyle:"none", outlineColor:"none"}}>
                                    Sign Up</h1>
                    </Jumbotron>
                </div>
                
                <div style={{height:"600px", width:"300px", margin:"0 auto"}}>
                    <Form style={{height:"600px", width:"300px"}}>

                    <Form.Group>

                    <Form.Row>
                        <Col>
                        <Form.Control placeholder="First name" style={{backgroundColor:"#0e0e0e", 
                                            boxShadow:"none", color:"#5bc0de", 
                                            fontFamily:"Roboto Thick, sans-serif", 
                                            fontWeight:"200",
                                            borderColor:"#17a2b8"}} />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Last name" style={{backgroundColor:"#0e0e0e", 
                                            boxShadow:"none", color:"#5bc0de", 
                                            fontFamily:"Roboto Thick, sans-serif", 
                                            fontWeight:"200",
                                            borderColor:"#17a2b8"}}/>
                        </Col>
                    </Form.Row>

                    </Form.Group>
                    

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" 
                                            style={{backgroundColor:"#0e0e0e", 
                                            boxShadow:"none", color:"#5bc0de", 
                                            fontFamily:"Roboto Thick, sans-serif", 
                                            fontWeight:"200",
                                            borderColor:"#17a2b8"}} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control onFocus="none" 
                                            style={{backgroundColor:"#0e0e0e", 
                                            boxShadow:"none", color:"#5bc0de", 
                                            fontFamily:"Roboto Thick, sans-serif", 
                                            fontWeight:"200",
                                            borderColor:"#17a2b8"}}
                                            type="password" placeholder="Password" />
                        </Form.Group>

                    <InputGroup className="mb-2" style={{backgroundColor:"#0e0e0e", 
                                            boxShadow:"none", color:"#5bc0de", 
                                            fontFamily:"Roboto Thick, sans-serif", 
                                            fontWeight:"200",
                                            borderColor:"#17a2b8"}}>
                    <InputGroup.Append>
                    
                    <InputGroup.Text style={{backgroundColor:"#0e0e0e", 
                                            boxShadow:"none", color:"#7d7d7d", 
                                            fontFamily:"Roboto Thick, sans-serif", 
                                            fontWeight:"200",
                                            borderColor:"#17a2b8"}}>+1</InputGroup.Text>
                    
                    </InputGroup.Append>
                    
                   
                            <Form.Control controlId="formBasicContactInfo" 
                                            onFocus="none" 
                                            style={{backgroundColor:"#0e0e0e", 
                                            boxShadow:"none", color:"#5bc0de", 
                                            fontFamily:"Roboto Thick, sans-serif", 
                                            fontWeight:"200",
                                            borderColor:"#17a2b8"}}
                                            type="contact-info" placeholder="Contact No." />

                    </InputGroup>
                        
                        <Button variant="info" type="tel" position="center"
                                style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontWeight:"200", padding:"15px", width:"300px",
                                        marginTop:"10px",
                                        boxShadow:"gray"}}>
                            Sign Up
                        </Button>
                    </Form>
                </div>
            </div>
         );
    }
}

export default Register;