import React, { Component } from 'react';
import NavBar from './navbar';
import SignIn from './signin';

class signInTab extends Component {
    state = {  }
    render() { 
        return ( 
            <div alignContent="center" style={{position:"static"}}>
              
              {/* NAVBAR */}
              <div><NavBar/></div>

              {/* SIGN IN */}
              <div alignContent="center" 
                  style={{alignSelf:"center", height:"100%", 
                          position:"center"}}>
                            <SignIn style={{alignSelf:"center", 
                                    position:"center"}}/>
                </div>
              </div>
         );
    }
}
 
export default signInTab;

