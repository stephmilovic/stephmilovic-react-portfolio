import React from 'react';

const tags = [
    {value: 'Front-End Architecture'},
    {value: 'JavaScript', featured: true},
    {value: 'Functional Programming'},
    {value: 'Flux'},
    {value: 'MVC'},
    {value: 'MVVM'},
    {value: 'React', featured: true},
    {value: 'Node.js', featured: true},
    {value: 'ExpressJS'},
    {value: 'React-Native'},
    {value: 'Redux', featured: true},
    {value: 'Angular'},
    {value: 'Webpack', featured: true},
    {value: 'Gulp'},
    {value: 'ES6', featured: true},
    {value: 'Babel'},
    {value: 'ESLint'},
    {value: 'GraphQL'},
    {value: 'Sass'},
    {value: 'CSS Modules', featured: true},
    {value: 'iOS'},
    {value: 'Android'},
    {value: 'Java'},
    {value: 'Groovy'},
    {value: 'NoSQL'},
    {value: 'SQL'},
    {value: 'MongoDB'},
    {value: 'RESTful APIs', featured: true},
    {value: 'SSR'},
    {value: 'npm'},
    {value: 'yarn'},
    {value: 'JSON'},
    {value: 'Ajax', featured: true},
    {value: 'XML'},
    {value: 'Version Control'},
    {value: 'Web Performance'},
    {value: 'SRE', featured: true},
    {value: 'Progressive Enhancement'},
    {value: 'Responsive Design'},
    {value: 'Selenium', featured: true},
    {value: 'Geb'},
    {value: 'Appium'},
    {value: 'Jest', featured: true},
    {value: 'Mocha'},
    {value: 'Enzyme'},
    {value: 'TDD', featured: true},
    {value: 'BDD'},
    {value: 'Bash'},
    {value: 'Jenkins', featured: true},
    {value: 'DevOps'},
    {value: 'Docker'},
    {value: 'Fastly'},
    {value: 'Nagios'},
    {value: 'AWS', featured: true},
    {value: 'Continuous Integration/Delivery'},
    {value: 'Agile'},
    {value: 'Object Oriented Design', featured: true},
    {value: 'HTTP/2'},
    {value: '...and more!'},
];

export default () =>
    <section className="section skills">
        <h2 id="scroll-skills">Skills</h2>
        <ul className="cloudMap">
            {tags.map((tag, i) =>
                <li
                    key={i}
                    className={tag.featured ? 'featured-item' : 'item'}
                >
                    {tag.value}
                </li>
            )}
        </ul>
    </section>;
