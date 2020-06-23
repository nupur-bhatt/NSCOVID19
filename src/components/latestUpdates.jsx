import React, { Component } from 'react';
import NavBar from './navbar';
import Updates from './updates';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div alignContent="center" style={{position:"static"}}>
              
              {/* NAVBAR */}
              <div><NavBar/></div>

              
                {/* LATEST UPDATES  */}
                <div>
                  <Updates/>
                </div>

               
              
              </div>
         );
    }
}
 
export default Home;

