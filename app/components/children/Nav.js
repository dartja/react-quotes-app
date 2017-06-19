import React from "react";

class Nav extends React.Component {
    render() {
        return (
            <div className="navbar navbar-toggleable-md navbar-light">
            	<h5>Quotes App with React</h5>
            	<ul id="nav-mobile" className="nav navbar-nav navbar-right">
				  <li><a href="/">Home</a></li>
				  <li><a href="/favorites">Favorites</a></li>
				</ul>
          </div>
        );
    }
};

export default Nav;
