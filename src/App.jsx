import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Nav from './components/nav';
import Work from './components/work';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="type-system-rounded flexParent">
                <main className="row flexGrow">
                    <div>
                        <h1 id="logo">Steph Milovic</h1>
                        <Nav />
                        <Work />
                    </div>
                </main>
            </div>
        );
    }
}

export default hot(module)(App);
