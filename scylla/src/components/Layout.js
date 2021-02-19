import React from 'react'
import Auxiliarity from '../hoc/Auxiliarity';
function Layout(props) {
    return (
        <Auxiliarity>
            <div>Toolbar sideDrawer BackDrop</div>
            <main>
            {props.children}
            </main>
        </Auxiliarity>
    )
}

export default Layout
