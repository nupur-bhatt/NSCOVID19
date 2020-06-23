# CSCI5709 / Assignment 2 / NSCOVID19


NSCOVID19 URL: https://nscovid19.herokuapp.com/

NS Covid-19 is a one-stop destination for all things pertaining to Covid-19 in Nova Scotia. The purpose of NS Covid-19 is as follows:
1. To provide our target users, people residing in Nova Scotia, with precise and reliable information in the form of interactive maps and statistics
2. To provide support within the communities in Nova Scotia, by providing opportunities to volunteer to assist the elderly, donate to local businesses, foodbanks, charities and provide the elderly and disabled the option to seek assistance.
3. To provide information about resources and latest updates pertaining to COVID-19.

* Date Created: 21 June 2020
* Last Modification Date: 23 June 2020

## Author

* [Nupur Bhatt](np698803@dal.ca) 


## Deployment
Deployed in Heroku Successfully 
##App URL : https://nscovid19.herokuapp.com/ 

### In Heroku
* Home - https://nscovid19.herokuapp.com/home
* Dashboard - https://nscovid19.herokuapp.com/dashboard
* Latest Updates - https://nscovid19.herokuapp.com/latestupdates
* Sign In - https://nscovid19.herokuapp.com/signin
* Register - https://nscovid19.herokuapp.com/register

## Prerequisites
Node Package Manager is required, to install various modules used in the assignment. 
 

Following dependencies were used:

* "bootstrap": "^4.5.0",
* "express": "^4.17.1",
* "formik": "^2.0.1",
* "mapbox-gl": "^1.11.0",
* "react": "^16.13.1",
* "react-bootstrap": "^1.0.1",
* "react-dom": "^16.13.1",
* "react-router-dom": "^5.2.0",
* "react-scripts": "^3.4.1",
* "serve": "^11.3.2",
* "yup": "^0.24.1"

## Steps for installation: 

1. Clone the git repository from https://github.com/nupur-bhatt/NSCOVID19.git, on your local machine.
2. Open the repository in an IDE. 
3. Install all dependencies used in the project by entering the following command on a terminal or console of the project directory. 

	For Windows: `npm install -g` 
	For MacOS: `sudo npm install -g` 

4. Run `npm start` 
View the app by opening [http://localhost:3000/] in a browser of your choice. 


## Usage Instructions
Only the following pages are responsive: 
	-Home page 
	-Dashboard
	-Latest Updates 
	-Sign In
	-Register 
Input validation is employed in the following pages:
	-Sign In
	-Register 
The map on the Dashboard is responsive and can be zoomed into, to view specific latitudes and longitudes. 
 

## Built With

* [create-react-app] – To generate the boiler plate code for a React App and getting started 
* [react-bootstrap] – For employing various components like Carousel, Card, Form and styling them. 
* [mapbox-gl] – For rendering responsive maps on the Dashboard page. 
* [react-router-dom] – For routing pages in the app.
* [yup] - For input validation in forms in the Sign In and Register pages, used in conjunction with Formik
* [formik] - For creating forms that display error messages if inputs are incorrectly entered. Used in conjunction with yup. 



## Sources Used

Following components were used from online sources:

1.	navbar.jsx:

I have used the Navbar component from the React-Bootstrap framework : https://react-bootstrap.github.io/components/navbar/
The NavBar component puts a navigation bar that is fixed and does not collapse when navigating to any of the pages on the Navbar. 


Code used from React-bootstrap: 
```
 <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
```
The code was modified by adding more Nav.Link components, removing the Search control, and adding Sign In and Register buttons instead. The styling was modified in the Sign In and Register buttons. 


Modified code by the author: 

```
<Navbar variant="dark" position="fixed" style={{ backgroundColor:" #0e0e0e"}}>
                <Nav className="mr-auto" style={{marginLeft:"30px", marginRight:"60px"}}>
                <Nav.Link as={Link} to="/home" style={{fontFamily:"Roboto Thick, 
						sans-serif", fontWeight:"200", 
						paddingRight:"20px"}} >Home</Nav.Link>
                <Nav.Link as={Link} to="/dashboard" 
			style={{fontFamily:"Roboto Thick, sans-serif", 
			fontWeight:"200", paddingRight:"20px"}}>
		Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/latestupdates" href="#updates" 
			style={{fontFamily:"Roboto Thick, sans-serif", 
			fontWeight:"200", paddingRight:"20px"}} >Latest Updates</Nav.Link>
                <Nav.Link href="#volunteer" 
			style={{fontFamily:"Roboto Thick, sans-serif", 
			fontWeight:"200", paddingRight:"20px"}}>Volunteer</Nav.Link>
                <Nav.Link href="#seekassistance" 
			style={{fontFamily:"Roboto Thick, sans-serif", 
			fontWeight:"200", paddingRight:"20px"}}>Seek Assistance</Nav.Link>
                <Nav.Link href="#resources" 
			style={{fontFamily:"Roboto Thick, sans-serif", 
			fontWeight:"200", paddingRight:"20px"}}>Resources</Nav.Link>
                </Nav>
                <Form inline style={{marginRight:"30px"}}>
                <Button as={Link} to="/signin" href="#signin" variant="outline-info" 
			style={{fontFamily:"Roboto Thick, sans-serif", 
			fontWeight:"200", border:"transparent", padding:"11px"}}>Sign In</Button>
                <Button as={Link} to="/register"href="#register" variant="outline-info" 
			style={{fontFamily:"Roboto Thick, sans-serif", 
			fontWeight:"200", padding:"10px"}} >Register</Button>
                </Form>
            </Navbar>
```

2.	carousel.jsx : 
```
I have used the Carousel component from the React-Bootstrap framework : https://react-bootstrap.github.io/components/carousel/
The Carousel component displays slides with images and textual content, that automatically slide to a different slide. 
I have used this component in the Home page, to display more information about NSCOVID19 and how it can help and the features it offers. 
The carousel slides to a different slide automatically. 
 

Code used from React-bootstrap: 

```

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

```

The code was modified by adding source to images in the Carousel, in the <img> tag. The Carousel.Caption is changed for every slide, to provide a description of what the app offers, and lorem Epsom text is used to display text for every caption. 


Modified code by the author: 

```

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


```

3.	map.jsx:

I have used the MapBox component from: https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/
The MapBox component displays an interactive map that can be zoomed in and out of, also displaying coordinates(latitude, longitude) and zoom of the map. 

Code used from https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/ : 

```
import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
 
mapboxgl.accessToken = 'MAPBOX_ACCESS_TOKEN';
 
class Application extends React.Component {
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
container: this.mapContainer,
style: 'mapbox://styles/mapbox/streets-v11',
center: [this.state.lng, this.state.lat],
zoom: this.state.zoom
});
 
map.on('move', () => {
this.setState({
lng: map.getCenter().lng.toFixed(4),
lat: map.getCenter().lat.toFixed(4),
zoom: map.getZoom().toFixed(2)
});
});
}
 
render() {
return (
<div>
<div className='sidebarStyle'>
<div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
</div>
<div ref={el => this.mapContainer = el} className='mapContainer' />
</div>
)
}
}
 
ReactDOM.render(<Application />, document.getElementById('app'));

```


The code was modified to change the styling and alignment of the MapBox.

Modified code by the author: 



```

import mapboxgl from 'mapbox-gl';

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


```

4. updates.jsx:

I have used the Card component from the React-Bootstrap framework : https://react-bootstrap.github.io/components/cards/
The Card component displays the latest updates pertaining to COVID-19. Lorem Ipsum text has been used to display the updates in the Cards. The page can be scrolled to view all the Card Components. I have used Card Columns to display the Card Components. 

Code used from React-Bootstrap : 


```

<CardColumns>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title that wraps to a new line</Card.Title>
      <Card.Text>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="primary" text="white" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card className="text-center">
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img src="holder.js/100px160" />
  </Card>
  <Card className="text-right">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>
</CardColumns>

```

The code was modified by adding another Card Column component with Card Components inside. 
The Card Components have been modified by changing the style, images, card titles, card text, block quotes and footers. 

Modified code by the author: 

```

<Container>
<Row>
  <Col>
  <CardColumns style={{marginLeft:"10px", marginTop:"50px", 
  marginBottom:"10px"}}>
  <Card style={{backgroundColor:"#5bc0de", borderColor:"none", border:"none"}}>
    <Card.Img variant="top" src="/resources.jpg" 
            style={{height:"100%", width:"100%"}}/>
    <Card.Body>
      <Card.Title style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontSize:"1.5em",
                                        textAlign:"center", fontVariant:"small-caps", color:"#F0F0F0"}}>
                                            Lorem ipsum</Card.Title>
      <Card.Text style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center", color:"#0e0e0e", opacity:0.55}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="p-3" style={{backgroundColor:"transparent", 
                                borderColor:"#FFFF", 
                                opacity:0.6}}>
    <blockquote className="blockquote mb-0 card-body">
      <p style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontSize:"1.5em",
                                        textAlign:"center", fontVariant:"small-caps", 
                                        color:"#FFFF", opacity:"0.6"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted" style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"0.9em", fontWeight:"200",
                                        textAlign:"center", color:"#0e0e0e"}}>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>


  <Card className="text-center p-3" style={{backgroundColor:"#5bc0de", borderColor:"none", border:"none"}}>
    <Card.Body style={{backgroundColor:"#5bc0de", borderColor:"none", border:"none"}}>
      <Card.Title style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontSize:"1.5em",
                                        textAlign:"center", fontVariant:"small-caps", color:"#F0F0F0"}}>Card title</Card.Title>
      <Card.Text style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center", color:"#3b3b3b"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </Card.Text>
      <Card.Text style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center", color:"#0e0e0e"}}>
        <small className="text-muted" style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"0.8em", fontWeight:"200",
                                        textAlign:"center", color:" #767676", border:"none"}}>Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{backgroundColor:"#5bc0de", borderColor:"none", border:"none"}}>
    <Card.Img src="/up5.jpg" />
  </Card>

  <Card style={{backgroundColor:"#5bc0de", borderColor:"none", border:"none"}}>
    <Card.Img variant="top" src="/up3.jpg" />
    <Card.Body style={{backgroundColor:"#FFFF", borderColor:"none", border:"none"}}>
      <Card.Title style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontSize:"1.5em",
                                        textAlign:"center", fontVariant:"small-caps", color:"#5bc0de"}}>Card title</Card.Title>
      <Card.Text style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center",color:"#0e0e0e", opacity:0.66}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </Card.Text>
    </Card.Body>
    <Card.Footer style={{backgroundColor:"#FFFF", borderColor:"none", border:"none", textAlign:"center"}}>
      <small className="text-muted" style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"0.8em", fontWeight:"200",
                                        textAlign:"center", color:"#767676", border:"none"}}>Last updated 7 mins ago</small>
    </Card.Footer>
  </Card>



  <Card text="white" className="text-center p-3" style={{backgroundColor:"#5bc0de", borderColor:"none", border:"none"}}>
    <blockquote className="blockquote mb-0 card-body" style={{backgroundColor:"#5bc0de", borderColor:"none", border:"none"}}>
      <p style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontSize:"1.5em",
                                        textAlign:"center", fontVariant:"small-caps", color:"#F0F0F0"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer" style={{backgroundColor:"#5bc0de", borderColor:"none", border:"none"}}>
        <small className="text-muted" style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center", color:"#0e0e0e"}}>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>

  <Card className="" style={{backgroundColor:"transparent", 
                                borderColor:"#FFFF", 
                                opacity:0.6}}>
    <Card.Img variant="top" src="/covid19cover.jpg" 
            style={{height:"100%", width:"100%"}}/>
    <Card.Body style={{borderColor:"#FFFF"}}>
      <Card.Title style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontSize:"1.5em",
                                        textAlign:"center", fontVariant:"small-caps", color:"#F0F0F0",}}>
                                            Lorem ipsum dolor sit amet</Card.Title>
      <Card.Text style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center", color:"#F0F0F0", opacity:0.6}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </Card.Text>
      </Card.Body>
  </Card>

  <Card className="text-center p-3" style={{backgroundColor:"#5bc0de", borderColor:"none", border:"none"}}>
    <Card.Body style={{backgroundColor:"#5bc0de", borderColor:"none", border:"none"}}>
      <Card.Title style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontSize:"1.5em",
                                        textAlign:"center", fontVariant:"small-caps", color:"#F0F0F0"}}>Card title</Card.Title>
      <Card.Text style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center", color:"#3b3b3b"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </Card.Text>
      <Card.Text style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center", color:"#0e0e0e"}}>
        <small className="text-muted" style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"0.8em", fontWeight:"200",
                                        textAlign:"center", color:"#0e0e0e", border:"none"}}>Last updated 20 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>

  

  <Card className="text-right" style={{backgroundColor:"#FFFF"}}>
    <blockquote className="blockquote mb-0 card-body" style={{backgroundColor:"#FFFF"}}>
      <p style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontSize:"1.5em",
                                        textAlign:"center", fontVariant:"small-caps", color:"#5bc0de"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted" style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center", color:"#0e0e0e"}}>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>


  <Card style={{backgroundColor:"#5bc0de", borderColor:"none", border:"none"}}>
    <Card.Img src="/up7.jpg" />
  </Card>

  <Card className="text-right" style={{backgroundColor:"#FFFF"}}>
    <blockquote className="blockquote mb-0 card-body" style={{backgroundColor:"#FFFF"}}>
      <p style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontSize:"1.5em",
                                        textAlign:"center", fontVariant:"small-caps", color:"#5bc0de"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted" style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center", color:"#0e0e0e"}}>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>




  <Card>
    <Card.Body>
      <Card.Title style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontSize:"1.5em",
                                        textAlign:"center", fontVariant:"small-caps", color:"#5bc0de"}}>lorem ipsum</Card.Title>
      <Card.Text style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center", color:"#3b3b3b"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </Card.Text>
      <Card.Text style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center", color:"#0e0e0e"}}>
        <small className="text-muted" style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"0.8em", fontWeight:"200",
                                        textAlign:"center", color:"#0e0e0e"}}>Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>




</CardColumns>   
  </Col>
  <Col>
  <CardColumns 
  style={{marginLeft:"10px", marginTop:"50px", 
  marginBottom:"10px"}}>
  <Card style={{backgroundColor:"#5bc0de", borderColor:"none", border:"none"}}>
    <Card.Img variant="top" src="/globe.jpg" 
            style={{height:"100%", width:"100%"}}/>
    <Card.Body>
      <Card.Title style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontSize:"1.5em",
                                        textAlign:"center", fontVariant:"small-caps", color:"#F0F0F0"}}>
                                            lorem ipsum</Card.Title>
      <Card.Text style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center", color:"#0e0e0e", opacity:0.55}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{backgroundColor:"#5bc0de", borderColor:"none", border:"none"}}>
    <Card.Img src="/up5.jpg" />
  </Card>

  <Card className="" style={{backgroundColor:"transparent", 
                                borderColor:"#FFFF", 
                                opacity:0.6}}>
    <Card.Img variant="top" src="/up1.jpg" 
            style={{height:"100%", width:"100%"}}/>
    <Card.Body style={{borderColor:"#FFFF"}}>
      <Card.Title style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontSize:"1.5em",
                                        textAlign:"center", fontVariant:"small-caps", color:"#F0F0F0",}}>
                                            Lorem ipsum dolor sit amet</Card.Title>
      <Card.Text style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center", color:"#F0F0F0", opacity:0.6}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </Card.Text>
      </Card.Body>
  </Card>

  

  <Card style={{backgroundColor:"#5bc0de", borderColor:"none", border:"none"}}>
    <Card.Img variant="top" src="/up4.jpg" />
    <Card.Body style={{backgroundColor:"#FFFF", borderColor:"none", border:"none"}}>
      <Card.Title style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontSize:"1.5em",
                                        textAlign:"center", fontVariant:"small-caps", color:"#5bc0de"}}>Card title</Card.Title>
      <Card.Text style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center",color:"#0e0e0e", opacity:0.66}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </Card.Text>
    </Card.Body>
    <Card.Footer style={{backgroundColor:"#FFFF", borderColor:"none", border:"none", textAlign:"center"}}>
      <small className="text-muted" style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"0.8em", fontWeight:"200",
                                        textAlign:"center", color:"#767676", border:"none"}}>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  
  <Card className="" style={{backgroundColor:"transparent", 
                                borderColor:"#FFFF", 
                                opacity:0.6}}>
    <Card.Img variant="top" src="/up2.jpg" 
            style={{height:"100%", width:"100%"}}/>
    <Card.Body style={{borderColor:"#FFFF"}}>
      <Card.Title style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontSize:"1.5em",
                                        textAlign:"center", fontVariant:"small-caps", color:"#F0F0F0",}}>
                                            Lorem ipsum dolor sit amet</Card.Title>
      <Card.Text style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center", color:"#F0F0F0", opacity:0.6}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </Card.Text>
      </Card.Body>
  </Card>

  <Card style={{backgroundColor:"#5bc0de", borderColor:"none", border:"none"}}>
    <Card.Img src="/up7.jpg" />
  </Card>

  <Card text="white" className="text-center p-3" style={{backgroundColor:"#5bc0de", borderColor:"none", border:"none"}}>
    <blockquote className="blockquote mb-0 card-body" style={{backgroundColor:"#5bc0de", borderColor:"none", border:"none"}}>
      <p style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontSize:"1.5em",
                                        textAlign:"center", fontVariant:"small-caps", color:"#F0F0F0"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer" style={{backgroundColor:"#5bc0de", borderColor:"none", border:"none"}}>
        <small className="text-muted" style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center", color:"#0e0e0e"}}>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>


  <Card className="text-right" style={{backgroundColor:"#FFFF"}}>
    <blockquote className="blockquote mb-0 card-body" style={{backgroundColor:"#FFFF"}}>
      <p style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontSize:"1.5em",
                                        textAlign:"center", fontVariant:"small-caps", color:"#5bc0de"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted" style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center", color:"#0e0e0e"}}>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>

  

  <Card className="text-center p-3" style={{backgroundColor:"#5bc0de", borderColor:"none", border:"none"}}>
    <Card.Body style={{backgroundColor:"#5bc0de", borderColor:"none", border:"none"}}>
      <Card.Title style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontSize:"1.5em",
                                        textAlign:"center", fontVariant:"small-caps", color:"#F0F0F0"}}>Card title</Card.Title>
      <Card.Text style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center", color:"#3b3b3b"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </Card.Text>
      <Card.Text style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center", color:"#0e0e0e"}}>
        <small className="text-muted" style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"0.8em", fontWeight:"200",
                                        textAlign:"center", color:"#0e0e0e", border:"none"}}>Last updated 2 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>

  
  <Card className="p-3" style={{backgroundColor:"transparent", 
                                borderColor:"#FFFF", 
                                opacity:0.6}}>
    <blockquote className="blockquote mb-0 card-body">
      <p style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontSize:"1.5em",
                                        textAlign:"center", fontVariant:"small-caps", 
                                        color:"#FFFF", opacity:"0.6"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted" style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"0.9em", fontWeight:"200",
                                        textAlign:"center", color:"#0e0e0e"}}>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>



  <Card>
    <Card.Body>
      <Card.Title style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontSize:"1.5em",
                                        textAlign:"center", fontVariant:"small-caps", color:"#5bc0de"}}>Lorem ipsum </Card.Title>
      <Card.Text style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center", color:"#3b3b3b"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </Card.Text>
      <Card.Text style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center", color:"#0e0e0e"}}>
        <small className="text-muted" style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"0.8em", fontWeight:"200",
                                        textAlign:"center", color:"#0e0e0e"}}>Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="" style={{backgroundColor:"transparent", 
                                borderColor:"#FFFF", 
                                opacity:0.6}}>
    <Card.Img variant="top" src="/covid19cover.jpg" 
            style={{height:"100%", width:"100%"}}/>
    <Card.Body style={{borderColor:"#FFFF"}}>
      <Card.Title style={{fontFamily:"Roboto Thick, sans-serif", 
                                        fontSize:"1.5em",
                                        textAlign:"center", fontVariant:"small-caps", color:"#F0F0F0",}}>
                                            Lorem ipsum dolor sit amet</Card.Title>
      <Card.Text style={{fontFamily:"Lato Thick, sans-serif", 
                                        fontSize:"1em", fontWeight:"200",
                                        textAlign:"center", color:"#F0F0F0", opacity:0.6}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </Card.Text>
      </Card.Body>
  </Card>
  
</CardColumns>

  </Col>
</Row>
  
</Container>


```


5. signin.jsx:

I have used the Form component from the React-Bootstrap framework : https://react-bootstrap.github.io/components/forms/
The Form component is used to create the Sign In page, by displaying form controls and employing input validation by using 'Formik'(https://github.com/jaredpalmer/formik) library and 'yup'(https://www.npmjs.com/package/yup) package in conjunction, as given in React-Bootstrap.  
The Formik library is used to create forms that gets values entered by the user, validates them and handles form submissions. 'Yup' package is used for parsing and validation. I have used both Formik and yup, as demonstrated in the React-Bootstrap documentation for Form Validation. 


Code used from React-Bootstrap : 


```

const { Formik } = formik;

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  terms: yup.bool().required(),
});

function FormExample() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: 'Mark',
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
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}

render(<FormExample />);

```



The code was modified by removing the First name, Last name, Username, City, State, Zip and check controls and adding Email and Password form controls. The styling for all controls and buttons has been changed. 


Modified code by the author: 

```

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

```


6. register.jsx:

I have used the Form component from the React-Bootstrap framework : https://react-bootstrap.github.io/components/forms/
The Form component is used to create the Register page, by displaying form controls and employing input validation by using 'Formik'(https://github.com/jaredpalmer/formik) library and 'yup'(https://www.npmjs.com/package/yup) package in conjunction, as given in React-Bootstrap.  
The Formik library is used to create forms that gets values entered by the user, validates them and handles form submissions. 'Yup' package is used for parsing and validation. I have used both Formik and yup, as demonstrated in the React-Bootstrap documentation for Form Validation. 


Code used from React-Bootstrap : 

```

const { Formik } = formik;

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  terms: yup.bool().required(),
});

function FormExample() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: 'Mark',
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
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}

render(<FormExample />);


```


The code was modified by removing Username, City, State, Zip and check controls and adding Email, Password and Contact No. form controls. The styling for all controls and buttons has been changed. A regex for validating phone numbers has been used from this source: https://www.sitepoint.com/community/t/phone-number-regular-expression-validation/2204

Modified code by the author: 


```

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


```




### The following components were used from React-Bootstrap, in conjunction with other components and changed according to the context of the pages mentioned in 1., 2., 3., 4., 5., and 6.:


1.Button (To employ buttons that can be clicked by the user) Source - https://react-bootstrap.github.io/components/buttons/

Code:
<Button variant="outline-info">Info</Button>


The code was modified by the author on the basis of context. Style of the Button component was changed accordingly. 



2.Container, Row and Col (Grid System component, to align content ) - https://react-bootstrap.github.io/layout/grid/

Code:
<Container>
  <Row>
    <Col>1 of 1</Col>
  </Row>
</Container>

The code was modified by the author on the basis of context. Style of the Container, Row and Col components was changed accordingly. 


3.Jumbotron (To display headings that occupy the entire width of the page and to emphasize them, in Sign In and Register pages.) Source - https://react-bootstrap.github.io/components/jumbotron/

Code:
<Jumbotron fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>

The code was modified by the author on the basis of context. Style of the Jumbotron component was changed accordingly. 


###	Fonts used in various components:

1.	https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:200
2.	https://fonts.googleapis.com/css?family=Raleway:800
3.	https://fonts.googleapis.com/css?family=Lato:100
4.	https://fonts.googleapis.com/css?family=Roboto+Condensed:700
5.	https://fonts.googleapis.com/css?family=Roboto:100

###   Images used in various components: 

##  carousel.jsx

1.	covid19cover.jpg -  
	Photo by August de Richelieu from Pexels
	[Source] - (https://www.pexels.com/photo/mother-putting-a-face-mask-on-her-daughter-4261252/)

2.	virus.jpg [Source] - (https://www.pexels.com/search/biology%20coronavirus/)

3.	volunteer.jpg -  
	Photo by Julia M Cameron from Pexels
	[Source] - (https://www.pexels.com/photo/photo-of-boy-watching-through-imac-4145243/)

4.	stats.jpg -  
	Photo by Markus Spiske from Pexels
	[Source] - (https://www.pexels.com/photo/coronavirus-statistics-on-screen-3970330/)

5.	updates.jpg -  
	Photo by H Shaw on Unsplash
	[Source] - (https://unsplash.com/photos/PCWxONF5JY4)

6.	map.jpg - 
	Photo by Pixabay from Pexels
	[Source] - (https://www.pexels.com/photo/black-textile-41949/)

7.	resources.jpg - 
	Photo by Anna Shvets from Pexels
	[Source] - (https://www.pexels.com/photo/woman-in-yellow-tshirt-and-beige-jacket-holding-a-fruit-stand-3962285/)

##  updates.jsx

1.	covid19cover.jpg -  
	Photo by August de Richelieu from Pexels
	[Source] - (https://www.pexels.com/photo/mother-putting-a-face-mask-on-her-daughter-4261252/)

2.	up5.jpg - 
	Photo by cottonbro from Pexels
	[Source] - (https://www.pexels.com/photo/not-today-covid19-sign-on-wooden-stool-3952231/)

3.	up7.jpg - 
	Photo by cottonbro from Pexels
	[Source] - (https://www.pexels.com/photo/fashion-man-people-sign-3952233/)

4.	volunteer.jpg -  
	Photo by Julia M Cameron from Pexels
	[Source] - (https://www.pexels.com/photo/photo-of-boy-watching-through-imac-4145243/)

5.	up4.jpg -  
	Photo by Anna Shvets from Pexels
	[Source] - (https://www.pexels.com/photo/woman-sitting-on-luggage-3943882/)

6.	up1.jpg -  
	Photo by Markus Spiske from Pexels
	[Source] - (https://www.pexels.com/photo/coronavirus-news-on-screen-3970332/)

7.	up2.jpg -  
	Photo by cottonbro from Pexels
	[Source] - (https://www.pexels.com/photo/the-new-york-times-newspaper-3944377/)

8.	up3.jpg -  
	Photo by Burst from Pexels
	[Source] - (https://www.pexels.com/photo/person-washing-his-hand-545014/)

