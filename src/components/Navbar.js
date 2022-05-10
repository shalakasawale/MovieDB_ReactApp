import React, { Component } from 'react'

class Navbar extends Component {

    render() {
        return ( 
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper indigo darken-4">
                        <a href="index.html" className="brand-logo center white-text">Movie DB using ReactJS</a>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;