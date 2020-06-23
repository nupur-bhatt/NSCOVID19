import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';


import { Form, Button, Col, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
    email: yup.string().email('Enter a valid Email Id!').required('Please enter your email!'),
    password: yup.string().required('Please enter your password!').min(8,'Password should be atleast 8 characters!')
  });
  
  function FormExample() {
    return (
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          lastName: 'Otto',
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
          <Form noValidate onSubmit={handleSubmit} style={{height:"600px", width:"300px"}}>
   
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
                                fontWeight:"200", color:"#17a2b8"}}>
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
              
  

            <Form.Group>
            <Button variant="info" type="submit" position="center"
                                style={{fontFamily:"Roboto Thick, sans-serif", 
                                fontWeight:"200", padding:"14px", width:"300px",
                                marginTop:"10px",
                                boxShadow:"gray"}}>
                            Sign In
                        </Button>
            </Form.Group>
          </Form>
        )}
      </Formik>
    );
  }

class SignIn extends Component {
    
    state = {  }
    render() { 
        return ( 
           
                <div style={{ height:"300px", width:"450px", margin:"0 auto"}}>
                
                <div style={{marginTop:"10px"}}>
                    <Jumbotron style={{alignSelf:"center", position:"center", 
                                        backgroundColor:"#0e0e0e"}}>
                    <h1 style={{fontFamily:"Roboto, sans-serif", 
                                textAlign:"center", color:"#7d7d7d", 
                                fontWeight:"0", fontSize:"3.5em", 
                                outlineStyle:"none", outlineColor:"none", 
                                }}>Sign in</h1>
                    </Jumbotron>
                </div>
                
                <div style={{height:"600px", width:"300px", margin:"0 auto"}}>
                    <FormExample/>
                </div>
            </div>
         );
    }
}
 
export default SignIn;