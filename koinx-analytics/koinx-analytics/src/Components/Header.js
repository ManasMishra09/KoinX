import React from 'react';
import logo from '../Images/logo.png';


const Header = () => {

  const ExpandTheToggle = () => {
    const navElem = document.getElementById("myTopnav");
    if (navElem.className === "topnav") {
      navElem.className += " responsive";
    } else {
      navElem.className = "topnav";
    }
  };

  return (
    <div className="App-header">
      <div className="headDivid">
        <div className="logo">
          <img scr={logo} height="40" width="150" />
        </div>
        <div className="topnav" id="myTopnav">
          <a href="#home">Crypto Taxes</a>
          <a href="#news">Free Tools</a>
          <a href="#contact">Resource Center</a>
          <a href="#about" className="getstart" style={{color:'white'}}>Get Started</a>
          <a style={{ fontSize: '20px' }} className="icon" onClick={ExpandTheToggle}>&#9776;</a>
        </div>
      </div>
      <div className="pageTitle"><span className="Tit1">Cryptocurrencies</span> &#8811; <b>Bitcoin</b></div>
    </div>
    
  );
};

export default Header;
