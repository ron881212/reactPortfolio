import React from 'react';
import './styling.css'

export default class NavBar extends React.Component {
  render() {
    return (
      <div className='nav-bottom'>
      <div className='container fixed-top'>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand">Ronald Glover</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                <a className="nav-link" href="#">Web Apps <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Phone Apps</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Contacts</a>
                </li>
              </ul>
            </div>
        </nav>
      </div>
      </div>

    );
  }
}
