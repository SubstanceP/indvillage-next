import React from 'react';

export default class NavBar extends React.Component {
    render() {
        return(
            <nav style={{"marginTop":"-1.5rem",
                         "backgroundColor":"transparent"}}>
                <div className="nav-wrapper" style={{"backgroundColor":"none"}}>
                    <ul className="flexnav">
                        <li><a href="#post1">Contact</a></li>
                        <li><a href="#post2">Gallery</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}