import React, { Component } from 'react'
import SideNavigation from './sideNavigation';
import Routes from './Routes';

export default class main extends Component {
    render() {
        return (
            <div className="flexible-content">
                <SideNavigation />
                <main id="content" className="p-5">
                    <Routes />
                </main>
            </div>
        )
    }
}
