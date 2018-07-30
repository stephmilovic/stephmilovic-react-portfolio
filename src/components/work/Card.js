import React from 'react';

export default props => {
    console.log('props', props.coolImg);
    const {
        featuredImage = 'images/swapify3.png',
        name = '',
        description = '',
        tags = [''],
        images = [''],
        privateMsg,
        summary = '',
        coolImg,
    } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={featuredImage} alt="swapify" />
            </div>
            <div className="card-header">
                <h3>{name}</h3>
            </div>
            <div className="card-copy">
                <p className="cb">
          This project contains sensitive content and is not available for
          public viewing.
                </p>
            </div>
        </div>
    );
};
