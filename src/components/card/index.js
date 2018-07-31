import React from 'react';
import Tags from 'components/tags';
import LinkModal from 'components/link-modal';

export default props => {
    const {
        featuredImage,
        name,
        tags,
        privateMsg,
        summary,
        siteLink,
        siteGithub,
    } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={require(`src/${featuredImage}`)} alt={name} />
            </div>
            <div className="card-header">
                <h3>{name}</h3>
            </div>
            <div className="card-copy">
                <p>{summary}</p>
                <LinkModal {...props} />
                <Tags tags={tags} />
                <p display-if={privateMsg} className="cb">{privateMsg}</p>
                <p display-if={siteLink && siteGithub}>
                    <span>
                        <a href={siteLink} target="_blank">Live Site</a>
                        {' '}-{' '}
                        <a href={siteGithub} target="_blank">GitHub</a>
                    </span>
                </p>
            </div>
        </div>
    );
};
