import React from 'react';
import logo from '../styles/Bouvet_logo_orange_RGB svg.svg';
import '../styles/_appHeader.css';

const AppHeader = (props) => (

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1>{props.subText}</h1>
          </div>            
    );
  

export default AppHeader;
