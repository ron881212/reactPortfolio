import React from 'react';
import { Link } from "react-router-dom";
import './styling.css'

export default class NavBar extends React.Component {  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light nav-style fixed-top" 
      style={this.props.bgcolor ? {backgroundColor: "black"} : {backgroundColor: "white"}}
      >
        <div className='container'>
          <a className="navbar-brand"
          style={this.props.bgcolor ? {color: "gray"} : {color: "black"}}>    
          Ronald Glover
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse flex-row-reverse">
              <ul className="navbar-nav">
                <li className="nav-item">
                <Link to="/" className="nav-link"
                  style={this.props.bgcolor ? {color: "gray"} : {color: "black"}}>    
                  Web Apps
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/PhoneApps" className="nav-link"
                  style={this.props.bgcolor ? {color: "gray"} : {color: "black"}}>    
                  Phone Apps
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/About" className="nav-link"
                  style={this.props.bgcolor ? {color: "gray"} : {color: "black"}}>    
                  About
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/Contact" className="nav-link"
                  style={this.props.bgcolor ? {color: "gray"} : {color: "black"}}>    
                  Contact
                </Link>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    );
  }
}
