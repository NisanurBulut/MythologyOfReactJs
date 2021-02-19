import React from 'react'
import Auxiliarity from '../../hoc/Auxiliarity';
import classes from './Layout.css';

function Layout(props) {
    return (
        <Auxiliarity>
            <div>Toolbar sideDrawer BackDrop</div>
            <main className={classes.Content}>
            {props.children}
            </main>
        </Auxiliarity>
    )
}

export default Layout
