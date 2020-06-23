import React, { Component } from 'react';
import NavBar from './navbar';
import Slides from './carousel';




class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div alignContent="center" style={{position:"static"}}>
              
              {/* NAVBAR */}
              <div><NavBar/></div>

              {/* CAROUSEL */}
              <div style={{height:"100%", width:"100%"}}>
              <Slides/>
              </div>   
              </div>
         );
    }
}
 
export default Home;

