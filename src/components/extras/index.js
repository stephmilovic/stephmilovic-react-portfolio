import React from 'react';
import Store from 'src/store';
import Article from 'components/article';

const Extras = props => {
    const store = props.store;
    return (
        <section className="section extra">
            <h2 id="scroll-link-2">Extracurriculars</h2>
            <div className="grid">
                {store.get('extras').map((extra, i) => (
                    <Article key={extra.title + i} {...extra} />
                ))}
            </div>
        </section>

    );
};

export default Store(Extras);
