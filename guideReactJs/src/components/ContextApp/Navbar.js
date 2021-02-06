import React, {Component} from 'react';
import classes from '../../containers/AppContextApi/AppContextApi.css';
class Navbar extends Component {
    render() {
        return (
            <nav className={classes.nav}>
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;