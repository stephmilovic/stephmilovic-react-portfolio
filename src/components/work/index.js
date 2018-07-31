import React from 'react';
import Store from 'src/store';
import Card from 'components/card';

const Work = props => {
    const store = props.store;
    return (
        <section className="section work">
            <h2 id="scroll-work">Work</h2>
            <div className="cards">
                {store.get('projects').map((project, i) => (
                    <Card key={project.name + i} {...{ ...project, cardNumber: i }} />
                ))}
            </div>
        </section>
    );
};

export default Store(Work);
