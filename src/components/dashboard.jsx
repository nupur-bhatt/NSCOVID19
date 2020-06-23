import React, { Component } from 'react';
import NavBar from './navbar';
import MapNS from './map';


class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div alignContent="center" style={{position:"static"}}>
              
              {/* NAVBAR */}
              <div><NavBar/></div>

              

                {/* MAP */}
                <div><MapNS/></div>

              
              </div>
         );
    }
}
 
export default Dashboard;

