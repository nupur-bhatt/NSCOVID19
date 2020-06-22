import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

mapboxgl.accessToken = 'pk.eyJ1IjoibnVwdXJiaGF0dCIsImEiOiJja2JwOXRuaHcwbTM3MzFqeTJiMmJxaTgyIn0.suxvAos1me2kjtAgs75ivA';

class MapNS extends Component {

    constructor(props) {
        super(props);
        this.state = {
          lng: 5,
          lat: 34,
          zoom: 2
        };
      }
    

    componentDidMount() {
        const map = new mapboxgl.Map({
          container: this.mapRef,
          width: window.innerWidth,
          height: window.innerHeight,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [this.state.lng, this.state.lat],
          zoom: this.state.zoom
        });
       
        map.on('move', () =>{
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
                });
        });
      
      }

    

    render() { 

        return ( 
            <div style={{height:"100%", width:"100%"}}>
                <div>
                <div style={{backgroundColor:"black", 
                            opacity:"0.7", color:"#FFFF", 
                            display:"inline-block", position:"absolute", 
                            zIndex: 1, padding:"4px", margin:"12px",
                            fontFamily:"Roboto Thick, sans-serif", fontVariant:"small-caps"}}>
                                Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div>
                <div ref={el => this.mapRef = el}
                            style={{top:0, bottom:0, left:0, right:0, 
                            position:"center", 
                            height:"400px", width:"100%"}} />
                <div style={{marginTop:"50px", marginLeft:"100px", 
                            marginRight:"100px", marginBottom:"100px"}}>
                   
                <CardGroup style={{position:"center"}}>
                <Card style={{borderColor:"#5bc0de", 
                                color:"#5bc0de", 
                                backgroundColor:"#0e0e0e"}}>
                    <Card.Body style={{backgroundColor:"#0e0e0e"}}>
                    <Card.Title style={{fontFamily:"Raleway, sans-serif", 
                                        fontSize:"1.5em", fontVariant:"small-caps",
                                        textAlign:"center"}}>
                                        Confirmed</Card.Title>
                    <Card.Text style={{fontFamily:"Lato, sans-serif", 
                                        fontSize:"3.5em", fontWeight:"200",
                                        textAlign:"center"}}>
                        54,674
                    </Card.Text>
                    </Card.Body>
                </Card >

                <Card style={{borderColor:"#5bc0de", 
                                color:"#5bc0de", 
                                backgroundColor:"#0e0e0e"}}>
                    
                    <Card.Body style={{backgroundColor:"#0e0e0e"}}>
                    <Card.Title style={{fontFamily:"Raleway, sans-serif", 
                                        fontSize:"1.5em", fontVariant:"small-caps", 
                                        textAlign:"center"}}>Active</Card.Title>
                    <Card.Text style={{fontFamily:"Lato, sans-serif", 
                                        fontSize:"3.5em", fontWeight:"200",
                                        textAlign:"center"}}>
                        49,266
                    </Card.Text>
                    </Card.Body>
                    
                </Card>


                <Card style={{borderColor:"#5bc0de", 
                                color:"#5bc0de", 
                                backgroundColor:"#0e0e0e"}}>
                
                    <Card.Body style={{backgroundColor:"#0e0e0e"}}>
                    <Card.Title style={{fontFamily:"Raleway, sans-serif", 
                                        fontSize:"1.5em", fontVariant:"small-caps", 
                                        textAlign:"center"}}>Recovered</Card.Title>
                    <Card.Text style={{fontFamily:"Lato, sans-serif", 
                                        fontSize:"3.5em", fontWeight:"200",
                                        textAlign:"center"}}>
                        4,917
                    </Card.Text>
                    </Card.Body>
                </Card>


                <Card style={{borderColor:"#5bc0de", 
                                color:"#5bc0de", 
                                backgroundColor:"#0e0e0e"}}>
                
                    <Card.Body style={{backgroundColor:"#0e0e0e"}}>
                    <Card.Title style={{fontFamily:"Raleway, sans-serif", 
                                        fontSize:"1.5em", fontVariant:"small-caps", 
                                        textAlign:"center"}}>Dead</Card.Title>
                    <Card.Text style={{fontFamily:"Lato, sans-serif", 
                                        fontSize:"3.5em", fontWeight:"200",
                                        textAlign:"center"}}>
                        491
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardGroup>

                </div>
            
            </div>
         );
    }
}
 
export default MapNS;