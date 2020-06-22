import React, { Component } from 'react';
import NavBar from './navbar';
import Slides from './carousel';
import SignIn from './signin';
import Register from './register';
import MapNS from './map';
import Updates from './updates';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div alignContent="center" style={{position:"static"}}>
              
              {/* NAVBAR */}
              <div><NavBar/></div>

              {/* CAROUSEL */}
              {/* <div style={{height:"100%", width:"100%"}}>
              <Slides/>
              </div>    */}


              {/* SIGN IN */}
              {/* <div alignContent="center" 
                  style={{alignSelf:"center", height:"100%", 
                          position:"center"}}>
                            <SignIn style={{alignSelf:"center", 
                                    position:"center"}}/>
                </div> */}
              

                {/* REGISTER */}
                {/* <div alignContent="center" 
                  style={{alignSelf:"center", height:"100%", 
                          position:"center"}}>
                            <Register style={{alignSelf:"center", 
                                    position:"center"}}/>
                </div> */}

                {/* DASHBOARD */}

                {/* MAP */}
                {/* <div><MapNS/></div> */}

                {/* LATEST UPDATES  */}
                <div>
                  <Updates/>
                </div>

                {/* VOLUNTEER */}
              
              </div>
         );
    }
}
 
export default Home;

