import React from 'react';
import Store from 'src/store';

const Contact = props => {
    const store = props.store;
    return (
        <section className="section contact">
            <h2 id="scroll-contact">Get In Touch</h2>
            <ul className="zocial contact-links">
                {store.get('contact').map((contact, i) => (
                    <li key={contact.method+i}>
                        <a href={contact.link} target="_blank">
                            {contact.symbol}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Store(Contact);
