import React from 'react';
import Store from 'src/store';

const About = props => {
    const store = props.store;
    return (
        <section className="section about">
            <h2 id="scroll-about">About Me</h2>
            <p>{store.get('about')}</p>
        </section>
    );
};

export default Store(About);
