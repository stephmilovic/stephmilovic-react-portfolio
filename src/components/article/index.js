import React from 'react';

export default props => {
    const {
        title,
        subtitle,
        date,
        body,
        link,
        linkCta,
        items,
    } = props;

    return (
        <div className="grid-box-wrap">
            <div className="grid-box">
                <h3>{title}</h3>
                {items ? items.map((item, i) =>
                    <div key={item.title+i}>
                        <p className="nomargin">
                            <span>{item.title}</span>
                        </p>
                        <p className="date">{item.date}</p>
                        <p>{item.body}{' '}
                            <a href="http://jazzcon.tech/" target="_blank" className="read-more">Read More <span>&rsaquo;</span></a>
                        </p>
                    </div>
                ) :
                    <div>
                        <p className="date">{subtitle}</p>
                        <p className="date">{date}</p>
                        <p>{body}{' '}
                            <a href={link} target="_blank" className="read-more">{linkCta} <span>&rsaquo;</span></a>
                        </p>
                    </div>
                }
            </div>
        </div>
    );
};
