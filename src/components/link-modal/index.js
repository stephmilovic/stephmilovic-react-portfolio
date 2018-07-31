import React from 'react';
import { compose, withState } from 'recompose';

const LinkModal = props => {
    const {
        name,
        description,
        images,
        cardNumber = 0,
        expandOpen,
        setExpandOpen,
    } = props;

    return (
        <div className="modal-container">
            <input id={`modal-toggle${cardNumber}`} type="checkbox" />
            <label className="modal-backdrop" htmlFor={`modal-toggle${cardNumber}`} />
            <div className="modal-content">
                <label className="modal-close" htmlFor={`modal-toggle${cardNumber}`}>&#x2715;</label>
                <h2>{name}</h2>
                <hr />
                <p>{description}</p>
                <div className="expander">
                    <a className={`expander-trigger ${expandOpen ? '' : 'expander-hidden'}`} onClick={() => setExpandOpen(!expandOpen)}>
                        View Screenshots
                    </a>
                    <div className="expander-content">
                        {images.map((image, i) => <img key={image + i} src={require(`src/${image}`)} />)}
                    </div>
                </div>
                <label className="modal-content-btn" htmlFor={`modal-toggle${cardNumber}`}>OK</label>
            </div>
            <label className="modal-btn" htmlFor={`modal-toggle${cardNumber}`}>Read More <span>&rsaquo;</span></label>
        </div>
    );
};

export default compose(withState('expandOpen', 'setExpandOpen', false))(
    LinkModal,
);
