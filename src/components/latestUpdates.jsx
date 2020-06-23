import React, { Component } from 'react';
import NavBar from './navbar';
import Updates from './updates';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div alignContent="center" >
              
              {/* NAVBAR */}
              <div><NavBar/></div>
              
                {/* LATEST UPDATES  */}
                <div width="100%">
                  <Updates width="100%"/>
                </div>

               
              
              </div>
         );
    }
}
 
export default Home;

