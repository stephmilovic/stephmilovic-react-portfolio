import React from 'react';
import Store from 'src/store';
import Card from 'components/card';

const About = props => {
    const store = props.store;
    return (
        <section className="section about">
            <h2 id="scroll-link-3">About Me</h2>
            <p>{store.get('about')}</p>
        </section>
    );
};

export default Store(About);
