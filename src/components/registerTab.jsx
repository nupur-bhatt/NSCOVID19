import React, { Component } from 'react';
import NavBar from './navbar';
import Register from './register';

class registerTab extends Component {
    state = {  }
    render() { 
        return ( 
            <div alignContent="center" style={{position:"static"}}>
              
              {/* NAVBAR */}
              <div><NavBar/></div>

              

                {/* REGISTER */}
                <div alignContent="center" 
                  style={{alignSelf:"center", height:"100%", 
                          position:"center"}}>
                            <Register style={{alignSelf:"center", 
                                    position:"center"}}/>
                </div>

                
              </div>
         );
    }
}
 
export default registerTab;

