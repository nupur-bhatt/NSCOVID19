import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Slides extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{width:"100%", height:"700px"}}>

        <Carousel style={{width:"100%", height:"600px"}} fluid>
        <Carousel.Item style={{width:"100%", height:"700px"}}>
            <Carousel.Caption style={{top:"100px", textAlign:"center",position:"fill"}} >
                <h1 style={{fontFamily:"Lato, sans-serif", 
                            alignContent:'center', fontSize:"2.5em", 
                            textAlign:'center', color:"#FFFF", 
                            lineHeight:"1em", fontVariant:"small-caps"}}>
                                NOVA SCOTIA
                </h1>
                <h1 style={{fontFamily:"Yanone Kaffeesatz, serif",fontWeight:"800",
                            alignContent:'center', fontSize:"7em", 
                            textAlign:'center', color:"#FFFF"}}>
                                CORONAVIRUS</h1>
                
                <h1 style={{fontFamily:"Lato, sans-serif", top:"0px",
                            alignContent:'center', fontSize:"2.5em", 
                            textAlign:'center', color:"#FFFF", lineHeight:"1em"}}>PORTAL</h1>
                
                </Carousel.Caption> 
                <img
                className="d-block w-100"
                src="/virus.jpg"
                alt="NSCOVID19"
                style={{opacity:"0.35", objectFit:"cover", width:"100%", height:"700px"}}/>
                
            </Carousel.Item>
            <Carousel.Item style={{width:"100%", height:"700px"}}>
            <Carousel.Caption style={{top:"30px"}} >
                <h1 style={{fontFamily:"Yanone Kaffeesatz, sans-serif", 
                            alignContent:'center', fontSize:"3em", 
                            textAlign:'center', color:"#FFFF", 
                            lineHeight:"1em"}}>
                                VOLUNTEER OR SEEK ASSISTANCE
                </h1>
                <p style={{fontFamily:"Lato, sans-serif", 
                            alignContent:'center', fontSize:"1em", 
                            textAlign:'center', color:"#FFFF"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> 
                <img
                className="d-block w-100"
                src="/volunteer.jpg"
                alt="First slide"
                style={{opacity:0.35, objectFit:"cover", width:"100%", height:"700px"}}/>
                
            </Carousel.Item>
            <Carousel.Item style={{width:"100%", height:"700px"}}>
                <img
                className="d-block w-100"
                src="/stats.jpg"
                alt="Third slide"
                style={{opacity:0.2, objectFit:"cover", width:"100%", height:"700px"}}/>

                <Carousel.Caption style={{top:"30px"}}>
                <h1 style={{fontFamily:"Yanone Kaffeesatz, sans-serif", 
                            alignContent:'center', fontSize:"3em", 
                            textAlign:'center', color:"#FFFF", 
                            lineHeight:"1em"}}>
                                VIEW COVID19 STATISTICS
                </h1>
                <p style={{fontFamily:"Lato, sans-serif", 
                            alignContent:'center', fontSize:"1em", 
                            textAlign:'center', color:"#FFFF"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{width:"100%", height:"700px"}}>
                <img
                className="d-block w-100"
                src="/updates.jpg"
                alt="Third slide"
                style={{opacity:0.35, objectFit:"cover", width:"100%", height:"700px"}}/>

                <Carousel.Caption style={{top:"30px"}}>
                <h1 style={{fontFamily:"Yanone Kaffeesatz, sans-serif", 
                        alignContent:'center', 
                        fontSize:"3em", textAlign:'center', 
                        color:"#FFFF", 
                        lineHeight:"1em"}}>
                            VIEW LATEST UPDATES ON  COVID-19
                </h1>
                <p style={{fontFamily:"Lato, sans-serif", 
                            alignContent:'center', fontSize:"1em", 
                            textAlign:'center', color:"#FFFF"}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{width:"100%", height:"700px"}}>
                <img
                className="d-block w-100"
                src="/map.jpg"
                alt="Fourth slide"
                style={{opacity:0.4, objectFit:"cover", width:"100%", height:"700px"}}/>

                <Carousel.Caption style={{top:"30px"}}>
                <h1 style={{fontFamily:"Yanone Kaffeesatz, sans-serif", 
                        alignContent:'center', fontSize:"3em", 
                        textAlign:'center', color:"#FFFF", 
                        lineHeight:"1em"}}>
                            INTERACT WITH MAPS SHOWING COVID-19 CASES
                </h1>
                <p style={{fontFamily:"Lato, sans-serif", 
                            alignContent:'center', fontSize:"1em", 
                            textAlign:'center', color:"#FFFF"}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{width:"100%", height:"700px"}}>
                <img
                className="d-block w-100"
                src="/resources.jpg"
                alt="Fourth slide"
                style={{opacity:0.25, objectFit:"cover", width:"100%", height:"700px"}}/>

                <Carousel.Caption style={{top:"30px"}}>
                <h1 style={{fontFamily:"Yanone Kaffeesatz, sans-serif", 
                        alignContent:'center', fontSize:"3em", 
                        textAlign:'center', color:"#FFFF", 
                        lineHeight:"1em"}}>
                            EXPLORE RESOURCES AVAILABLE NEAR YOU
                </h1>
                <p style={{fontFamily:"Lato, sans-serif", 
                            alignContent:'center', fontSize:"1em", 
                            textAlign:'center', color:"#FFFF"}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>

            </div>
            
         );
    }
}
 
export default Slides;