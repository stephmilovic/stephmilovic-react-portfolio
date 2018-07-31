import React from 'react';
import Store from 'src/store';
import Card from 'components/card';

const Work = props => {
    const store = props.store;
    return (
        <article>
            <section className="section work">
                <h2 id="scroll-link-1">Work</h2>
                <div className="cards">
                    {store
                        .get('projects')
                        .map((project, i) => (
                            <Card key={project.name + i} {...{ ...project, cardNumber: i }} />
                        ))}
                </div>
            </section>
            <hr />
            <section className="section extra">
                <h2 id="scroll-link-2">Extracurriculars</h2>
                <div className="grid">
                    <div className="grid-box-wrap">
                        <div className="grid-box">
                            <h3>20 In Their 20's 2017</h3>
                            <p className="date">Crain’s Chicago Business’ 20 In Their 20s</p>
                            <p className="date">May 2017</p>
                            <p>
                I am a member of Crain’s Chicago Business’ 20 In Their 20s for
                2017, a distinguished group of company founders, creatives and
                policy makers who’ve gone on to accomplish great things in
                Chicago and beyond.{' '}
                                <a
                                    href="http://www.chicagobusiness.com/section/20-in-their-20s-2017?recipient=D"
                                    target="_blank"
                                    className="read-more"
                                >
                  View Article <span>&rsaquo;</span>
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="grid-box-wrap">
                        <div className="grid-box">
                            <h3>Outstanding Technology Development Shortlist</h3>
                            <p className="date">
                Illinois Technology Association CityLIGHTS Awards
                            </p>
                            <p className="date">September 2016</p>
                            <p>
                The product that I am the technical lead for, Swapify, was
                nominated for the ITA's CityLIGHTS Award for Outstanding
                Technology Development.{' '}
                                <a
                                    href="https://www.illinoistech.org/news/rock-star-finalists-revealed-for-17th-annual-ita-citylights-awards"
                                    target="_blank"
                                    className="read-more"
                                >
                  Read More <span>&rsaquo;</span>
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="grid-box-wrap">
                        <div className="grid-box">
                            <h3>Product Manager of the Year Shortlist</h3>
                            <p className="date">V3 Digital Technology Leaders Awards</p>
                            <p className="date">June 2016</p>
                            <p>
                I was nominated for Front-end Developer of the year for my
                leadership and work on the modularization of the cleverbridge
                front-end architecture, and ended up as a finalist in the
                Product Manager of the Year category.{' '}
                                <a
                                    href="http://www.prweb.com/releases/2016/05/prweb13421565.htm"
                                    target="_blank"
                                    className="read-more"
                                >
                  View Press Release <span>&rsaquo;</span>
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="grid-box-wrap">
                        <div className="grid-box">
                            <h3>She Hacks Chi</h3>
                            <p className="date">Lead Organizer/Creator</p>
                            <p className="date">October 2015</p>
                            <p>
                She Hacks Chi is a (soon to be) annual cleverbridge hackathon
                that aims to close the gender gap in tech. We bring together
                beginner and intermediate coders together with experienced
                developers to hack in a supportive environment, developing
                applications to increase the number of women in tech.{' '}
                                <a
                                    href="https://shehackschi.splashthat.com/"
                                    target="_blank"
                                    className="read-more"
                                >
                  Visit Event Page <span>&rsaquo;</span>
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="grid-box-wrap">
                        <div className="grid-box">
                            <h3>Hack to the Future</h3>
                            <p className="date">Co-organizer & Hack Team Lead</p>
                            <p className="date">May 2016</p>
                            <p>
                Hack to the Future is another cleverbridge hackathon that brings
                together Chicago-area developers of all skill levels and
                educators to collaborate on developing applications that extend
                learning in the classroom.{' '}
                                <a
                                    href="https://hacktothefuture.splashthat.com/"
                                    target="_blank"
                                    className="read-more"
                                >
                  Visit Event Page <span>&rsaquo;</span>
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="grid-box-wrap">
                        <div className="grid-box">
                            <h3>Values Initiative Team</h3>
                            <p className="date">Team Member</p>
                            <p className="date">Summer 2016</p>
                            <p>
                Values are the most powerful motivators of personal action. They
                define and provide guidance as to how we are to act as we pursue
                our Vision. The Values Initiative Team was a diverse group of
                employees assembled by culture coaches for their gut level
                understanding of cleverbridge culture. With feedback from the
                company, the Values Team redefined and carried out a new set of
                values at cleverbridge.{' '}
                                <a
                                    href="https://www.cleverbridge.com/corporate/about-us/careers"
                                    target="_blank"
                                    className="read-more"
                                >
                  Read About Our Values <span>&rsaquo;</span>
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="grid-box-wrap">
                        <div className="grid-box">
                            <h3>Trainings & Workshops</h3>
                            <p className="nomargin">
                                <span>Dale Carnegie Course</span>
                            </p>
                            <p className="date">June 2015</p>
                            <p>
                Leadership, communications, and human resources training.{' '}
                                <a
                                    href="http://www.dalecarnegie.com/events/dale_carnegie_course/"
                                    target="_blank"
                                    className="read-more"
                                >
                  Read More <span>&rsaquo;</span>
                                </a>
                            </p>

                            <p className="nomargin">
                                <span>React Under the Hood</span>
                            </p>
                            <p className="date">October 2015</p>
                            <p>
                A deep dive into React, taught by Freddy Rangel.{' '}
                                <a
                                    href="http://html5devconf.com/training.html#rangel-react2"
                                    target="_blank"
                                    className="read-more"
                                >
                  Read More <span>&rsaquo;</span>
                                </a>
                            </p>

                            <p className="nomargin">
                                <span>
                  Single Page Application development using JavaScript
                                </span>
                            </p>
                            <p className="date">October 2015</p>
                            <p>
                A workshop on developing and architecting a Single Page
                Application using JavaScript only, taught by Tamas Piros.{' '}
                                <a
                                    href="http://html5devconf.com/training.html#tamas-single"
                                    target="_blank"
                                    className="read-more"
                                >
                  Read More <span>&rsaquo;</span>
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="grid-box-wrap">
                        <div className="grid-box">
                            <h3>Conferences</h3>
                            <p className="nomargin">
                                <span>JazzCon.Tech</span>
                            </p>
                            <p className="date">March 2017</p>
                            <p>
                3-day conference in New Orleans with a focus on JavaScript and
                Web Development.{' '}
                                <a
                                    href="http://jazzcon.tech/"
                                    target="_blank"
                                    className="read-more"
                                >
                  Read More <span>&rsaquo;</span>
                                </a>
                            </p>
                            <p className="nomargin">
                                <span>The Lead Developer</span>
                            </p>
                            <p className="date">June 2016</p>
                            <p>
                2-day conference featuring practical advice from experts on
                leading and motivating your team and high-level sessions on new
                and disruptive technologies.{' '}
                                <a
                                    href="http://2016.theleaddeveloper.com/"
                                    target="_blank"
                                    className="read-more"
                                >
                  Read More <span>&rsaquo;</span>
                                </a>
                            </p>
                            <p className="nomargin">
                                <span>HTML5Devconf</span>
                            </p>
                            <p className="date">October 2015</p>
                            <p>
                HTML5Devconf is the largest gathering of technical software
                developers, designers and decision makers in the world focused
                on Internet software technologies such as JavaScript, HTML5,
                CSS, node.js and other cross platform web, mobile and server
                technologies.{' '}
                                <a
                                    href="http://html5devconf.com/"
                                    target="_blank"
                                    className="read-more"
                                >
                  Read More <span>&rsaquo;</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section className="section about">
                <h2 id="scroll-link-3">About Me</h2>
                <p>
          Hi, I'm Steph Milovic. I am a Full-Stack Developer with 6 years of
          experience. I have a focus on{' '}
                    <strong>JavaScript, Node.js, and Front-end Architecture</strong>. My
          favorite front-end framework as of late is React/Redux. I have a B.A.
          in Arts Technology from Illinois State University. I currently work at{' '}
                    <a href="http://cleverbridge.com/" target="_blank">
            cleverbridge
                    </a>{' '}
          as the Technical Lead on our Service Development team, overseeing
          development of Swapify and our deployment processes.
                </p>
            </section>
            <hr />
            <section className="section contact">
                <h2 id="scroll-link-4">Get In Touch</h2>
                <ul className="zocial contact-links">
                    <li>
                        <a
                            href="mailto:milovics1@gmail.com?Subject=Hi%20Steph"
                            target="_blank"
                        >
              ]
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/stephanie-milovic-8bab1a44"
                            target="_blank"
                        >
              L
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/stephmilovic" target="_blank">
              g
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/stephmilovic" target="_blank">
              T
                        </a>
                    </li>
                </ul>
            </section>
            <a className="scroll-on-page-link" href="#scroll-on-page-top">
        Back to top
            </a>
        </article>
    );
};

export default Store(Work);
