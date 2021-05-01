import React from 'react';

export default class NavBar extends React.Component {
    render() {
        return(
            <nav className="iv-nav">
              <div className="nav-wrapper">
              <a href="#" className="brand-logo">
                <img className="nav-item" src={"../../images/logo.jpg"} alt="Independance Village" />
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a className="nav-item" href="sass.html">Services</a></li>
                <li><a className="nav-item" href="badges.html">FAQ</a></li>
                <li><a className="nav-item" href="collapsible.html">Contact</a></li>
              </ul>
            </div>
            {/*<div><img src="../../images/headerImg.jpg"/></div>*/}
          </nav>
        )
    }
}