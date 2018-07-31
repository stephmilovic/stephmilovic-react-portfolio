import React from 'react';

export default ({ tags }) => (
    <ul className="techs">
        {tags.map((tag, i) => <li key={tag + i}>{tag}</li>)}
    </ul>
);
