import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Updates extends Component {
    state = {  }
    render() { 
        return ( 
            <div>

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




            </div>
         );
    }
}
 
export default Updates;