import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Nav from './components/nav';
import Work from './components/work';
import Extras from './components/extras';
import About from './components/about';
import Contact from './components/contact';
import TagCloud from './components/tag-cloud';

class App extends Component {
    render() {
        return (
            <div className="type-system-rounded flexParent">
                <main className="row flexGrow">
                    <div id="scroll-on-page-top">
                        <h1 id="logo">Steph Milovic</h1>
                        <h3 id="logoSub">Senior Software Engineer</h3>
                        <Nav />
                        <article>
                            <TagCloud />
                            <hr />
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
