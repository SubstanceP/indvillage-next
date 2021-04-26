import React from 'react';

export default class NavBar extends React.Component {
    render() {
        return(
            <nav style={{"marginTop":"-1.5rem",
                         "backgroundColor":"transparent"}}>
                <div className="nav-wrapper" style={{"backgroundColor":"none"}}>
                    <ul className="flexnav">
                        <li><a href="#post1">Veterans</a></li>
                        <li><a href="#post2">Wellness</a></li>
                        <li><a href="#post3">Ameneties</a></li>
                        <li><a href="#post4">Lifestyle</a></li>
                        <li><a href="#post5">Family</a></li>
                        <li><a href="#post0">Community</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}