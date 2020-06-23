import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Form, Button, Col, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email('Enter a valid Email Id!').required('Please enter your email!'),
  password: yup.string().required('Please enter your password!').min(8,'Password should be atleast 8 characters!'),
  contact: yup.string().min(10).max(10).required('Please enter a valid phone number!').matches(phoneRegex, 'Phone number is not valid')
});

function FormExample() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <div style={{height:"600px", width:"300px", margin:"0 auto"}}>
        <Form noValidate onSubmit={handleSubmit} style={{height:"600px", width:"300px"}}>
          <Form.Row>

            <Col>
            <Form.Group  controlId="validationFormik101">
              
              <Form.Control
                type="text"
                name="firstName"
                placeholder="First name"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
                style={{backgroundColor:"#0e0e0e", 
                                            boxShadow:"none", color:"#5bc0de", 
                                            fontFamily:"Roboto Thick, sans-serif", 
                                            fontWeight:"200",
                                            borderColor:"#17a2b8"}}
              />
              <Form.Control.Feedback tooltip style={{fontFamily:"Roboto Thick, sans-serif", 
                                fontWeight:"200", color:"#17a2b8"}}>Looks good!</Form.Control.Feedback>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group  controlId="validationFormik102">
              
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last name"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
                style={{backgroundColor:"#0e0e0e", 
                                            boxShadow:"none", color:"#5bc0de", 
                                            fontFamily:"Roboto Thick, sans-serif", 
                                            fontWeight:"200",
                                            borderColor:"#17a2b8"}}
              />

              <Form.Control.Feedback tooltip style={{fontFamily:"Roboto Thick, sans-serif", 
                                fontWeight:"200", color:"#17a2b8"}}>Looks good!</Form.Control.Feedback>
            </Form.Group>
            </Col>
          </Form.Row>
          
          <Form.Group  controlId="validationFormik01">
                
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  style={{backgroundColor:"#0e0e0e", 
                                boxShadow:"none", color:"#5bc0de", 
                                fontFamily:"Roboto Thick, sans-serif", 
                                fontWeight:"200",
                                borderColor:"#17a2b8"}}
                />
                <Form.Control.Feedback type="invalid" 
                              style={{fontFamily:"Roboto Thick, sans-serif", 
                                fontWeight:"200",  color:"#17a2b8"}}>
                                    {errors.email}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group  controlId="validationFormik03">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                  style={{backgroundColor:"#0e0e0e", 
                                boxShadow:"none", color:"#5bc0de", 
                                fontFamily:"Roboto Thick, sans-serif", 
                                fontWeight:"200",
                                borderColor:"#17a2b8"}}
                />
  
                <Form.Control.Feedback type="invalid" style={{fontFamily:"Roboto Thick, sans-serif", 
                                fontWeight:"200", color:"#17a2b8"}}>
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              <InputGroup className="mb-2" style={{backgroundColor:"#0e0e0e", 
                                            boxShadow:"none", color:"#5bc0de", 
                                            fontFamily:"Roboto Thick, sans-serif", 
                                            fontWeight:"200", width:"300px",
                                            borderColor:"#17a2b8"}}>
                    <InputGroup.Append>
                    
                    <InputGroup.Text style={{backgroundColor:"#0e0e0e", 
                                            boxShadow:"none", color:"#7d7d7d", 
                                            fontFamily:"Roboto Thick, sans-serif", 
                                            fontWeight:"200", height:"38px", borderRadius:"3px",
                                            borderColor:"#17a2b8"}}>+1</InputGroup.Text>
                    
                    </InputGroup.Append>

              <Form.Group  controlId="validationFormik01">
                <Form.Control
                  type="contact-info"
                  name="contact"
                  placeholder="Contact No."
                  value={values.contact}
                  onChange={handleChange}
                  isInvalid={!!errors.contact}
                  style={{backgroundColor:"#0e0e0e", 
                                            boxShadow:"none", color:"#5bc0de", 
                                            fontFamily:"Roboto Thick, sans-serif", 
                                            fontWeight:"200", width:"255px",
                                            borderColor:"#17a2b8"}}
                />
                <Form.Control.Feedback type="invalid" 
                              style={{fontFamily:"Roboto Thick, sans-serif", 
                              fontWeight:"200", color:"#17a2b8"}}>
                                    {errors.contact}</Form.Control.Feedback>
              </Form.Group>
          </InputGroup>
              <Form.Group>
            <Button variant="info" type="submit" position="center"
                                style={{fontFamily:"Roboto Thick, sans-serif", 
                                fontWeight:"200", padding:"14px", width:"300px",
                                marginTop:"10px",
                                boxShadow:"gray"}}>
                            Register
                        </Button>
            </Form.Group>
        </Form>
        </div>
      )}
    </Formik>
  );
}
  

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
                
                <div><FormExample/></div>
            
                </div>
         );
    }
}

export default Register;