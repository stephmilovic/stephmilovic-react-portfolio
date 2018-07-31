import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Nav from './components/nav';
import Work from './components/work';
import Extras from './components/extras';
import About from './components/about';
import Contact from './components/contact';

class App extends Component {
    render() {
        return (
            <div className="type-system-rounded flexParent">
                <main className="row flexGrow">
                    <div>
                        <h1 id="logo">Steph Milovic</h1>
                        <Nav />
                        <article>
                            <Work />
                            <hr />
                            <Extras />
                            <hr />
                            <About />
                            <hr />
                            <Contact />
                        </article>
                        <a className="scroll-on-page-link" href="#scroll-on-page-top">Back to top</a>
                    </div>
                </main>
            </div>
        );
    }
}

export default hot(module)(App);
