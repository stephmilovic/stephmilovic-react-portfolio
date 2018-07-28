import React from 'react';

export default () => (
    <article>
        <section className="section work">
            <h2 id="scroll-link-1">Work</h2>
            <div className="cards">
                <div className="card">
                    <div className="card-image">
                        <img src="images/swapify3.png" alt="swapify" />
                    </div>
                    <div className="card-header">
                        <h3>Swapify</h3>
                    </div>
                    <div className="card-copy">
                        <p>
              Swapify is a full-stack application that "swaps" out modularized
              front-end components to create different design patterns.
                        </p>
                        <div className="modal-container">
                            <input id="modal-toggle" type="checkbox" />
                            <label className="modal-backdrop" htmlFor="modal-toggle" />
                            <div className="modal-content">
                                <label className="modal-close" htmlFor="modal-toggle">
                  &#x2715;
                                </label>
                                <h2>Swapify</h2>
                                <hr />
                                <p>
                  Swapify is a WYSIWYG editor that enables cleverbridge clients
                  to customize their online shopping carts without coding
                  experience. Users select a theme which they are then able to
                  fully customize, from changing fonts, colors, and layouts to
                  swaping out entire shopping cart components such as payment
                  options and order steps. Swapify makes creating and testing
                  different design patterns a breeze, making sales demos more
                  effective and relevant, enabling painless A/B testing for
                  analytics teams, and generally allowing clients to find the
                  pattern that’s best for their conversion.
                                </p>
                                <div className="expander">
                                    <a
                                        href="javascript:void(0)"
                                        className="expander-trigger expander-hidden"
                                    >
                    View Screenshots
                                    </a>
                                    <div className="expander-content">
                                        <img src="images/screen-swap-main.png" />
                                        <img src="images/screen-swap-layout.png" />
                                        <img src="images/screen-swap-header.png" />
                                        <img src="images/screen-swap-payment.png" />
                                        <img src="images/screen-swap-history.png" />
                                        <img src="images/screen-swap-admin.png" />
                                    </div>
                                </div>
                                <label className="modal-content-btn" htmlFor="modal-toggle">
                  OK
                                </label>
                            </div>
                            <label className="modal-btn" htmlFor="modal-toggle">
                Read More <span>&rsaquo;</span>
                            </label>
                        </div>
                        <ul className="techs">
                            <li>React</li>
                            <li>Redux</li>
                            <li>Node.js</li>
                            <li>CouchDB</li>
                            <li>Radium</li>
                            <li>CSS Modules</li>
                            <li>Sass</li>
                            <li>Webpack</li>
                            <li>Mocha/Chai</li>
                        </ul>
                        <p className="cb">
              This project contains sensitive content and is not available for
              public viewing.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img src="images/sassy.png" alt="sassy" />
                    </div>
                    <div className="card-header">
                        <h3>Sassy</h3>
                    </div>
                    <div className="card-copy">
                        <p>
              A design architecture and set of modularized components for the
              cleverbridge front-end development team to use while coding client
              e-commerce websites.
                        </p>
                        <div className="modal-container">
                            <input id="modal-toggle1" type="checkbox" />
                            <label className="modal-backdrop" htmlFor="modal-toggle1" />
                            <div className="modal-content">
                                <label className="modal-close" htmlFor="modal-toggle1">
                  &#x2715;
                                </label>
                                <h2>Sassy</h2>
                                <hr />
                                <p>
                  A design architecture and set of modularized components for
                  the cleverbridge front-end development team to use while
                  coding client e-commerce websites. From one base repository,
                  billions of design combinations can be executed
                  instantaneously utilizing Sass variables.
                                </p>
                                <div className="expander">
                                    <a
                                        href="javascript:void(0)"
                                        className="expander-trigger expander-hidden"
                                    >
                    View Screenshot
                                    </a>
                                    <div className="expander-content">
                                        <img src="images/screen-sassy.png" />
                                    </div>
                                </div>
                                <label className="modal-content-btn" htmlFor="modal-toggle1">
                  OK
                                </label>
                            </div>
                            <label className="modal-btn" htmlFor="modal-toggle1">
                Read More <span>&rsaquo;</span>
                            </label>
                        </div>
                        <ul className="techs">
                            <li>Sass</li>
                            <li>jQuery</li>
                            <li>Gulp</li>
                        </ul>
                        <p className="cb">
              This project contains sensitive content and is not available for
              public viewing.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img src="images/partial.png" alt="partial" />
                    </div>
                    <div className="card-header">
                        <h3>Partial Library</h3>
                    </div>
                    <div className="card-copy">
                        <p>
              A searchable reference library of the many modules available on
              the cleverbridge ecosystem, plus the corresponding style blocks
              (or partials) for each.
                        </p>
                        <div className="modal-container">
                            <input id="modal-toggle2" type="checkbox" />
                            <label className="modal-backdrop" htmlFor="modal-toggle2" />
                            <div className="modal-content">
                                <label className="modal-close" htmlFor="modal-toggle2">
                  &#x2715;
                                </label>
                                <h2>Partial Library</h2>
                                <hr />
                                <p>
                  A searchable reference library of the many modules available
                  on the cleverbridge ecosystem, plus the corresponding style
                  blocks (or partials) for each. When a teammate creates a
                  popular new partial, he or she can submit the partial to the
                  library in real time, enabling the team to share and re-use
                  one another's work. Altogether, the code base and partial
                  library effectively cut the time it takes to develop a cart in
                  half, increasing the efficiency of the entire front-end team
                  by 200%.
                                </p>
                                <div className="expander">
                                    <a
                                        href="javascript:void(0)"
                                        className="expander-trigger expander-hidden"
                                    >
                    View Screenshots
                                    </a>
                                    <div className="expander-content">
                                        <img src="images/screen-partial-lib.png" />
                                        <img src="images/screen-partial-partial.png" />
                                        <img src="images/screen-partial-fc.png" />
                                    </div>
                                </div>
                                <label className="modal-content-btn" htmlFor="modal-toggle2">
                  OK
                                </label>
                            </div>
                            <label className="modal-btn" htmlFor="modal-toggle2">
                Read More <span>&rsaquo;</span>
                            </label>
                        </div>
                        <ul className="techs">
                            <li>AngularJS</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>ExpressJS</li>
                            <li>Sass</li>
                        </ul>
                        <p className="cb">
              This project contains sensitive content and is not available for
              public viewing.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img src="images/cpu.png" alt="cpu to edu" />
                    </div>
                    <div className="card-header">
                        <h3>CPU to EDU</h3>
                    </div>
                    <div className="card-copy">
                        <p>
              CPU to EDU is an application that connects businesses who wish to
              donate their retired computers, tablets, and other technology with
              Chicago students in need.
                        </p>
                        <div className="modal-container">
                            <input id="modal-toggle3" type="checkbox" />
                            <label className="modal-backdrop" htmlFor="modal-toggle3" />
                            <div className="modal-content">
                                <label className="modal-close" htmlFor="modal-toggle3">
                  &#x2715;
                                </label>
                                <h2>CPU to EDU</h2>
                                <hr />
                                <p>
                  CPU to EDU is an application that connects businesses who wish
                  to donate their retired computers, tablets, and other
                  technology with Chicago students in need. Developed during
                  cleverbridge's Hack to the Future Hackathon, our goal is to
                  provide the resources to help students extend learning in the
                  classroom and beyond.
                                </p>
                                <div className="expander">
                                    <a
                                        href="javascript:void(0)"
                                        className="expander-trigger expander-hidden"
                                    >
                    View Screenshots
                                    </a>
                                    <div className="expander-content">
                                        <img src="images/screen-cpu.png" />
                                        <img src="images/screen-cpu-new.png" />
                                        <img src="images/screen-cpu-listings.png" />
                                    </div>
                                </div>
                                <label className="modal-content-btn" htmlFor="modal-toggle3">
                  OK
                                </label>
                            </div>
                            <label className="modal-btn" htmlFor="modal-toggle3">
                Read More <span>&rsaquo;</span>
                            </label>
                        </div>
                        <ul className="techs">
                            <li>React</li>
                            <li>Redux</li>
                            <li>Node.js</li>
                            <li>Webpack</li>
                            <li>CSS Modules</li>
                            <li>Sass</li>
                        </ul>
                        <p>
                            <span>
                                <a href="https://cputoedu.herokuapp.com/" target="_blank">
                  Live Site
                                </a>{' '}
                -{' '}
                                <a
                                    href="https://github.com/stephmilovic/BusinessToSchoolCPU/"
                                    target="_blank"
                                >
                  GitHub
                                </a>
                            </span>
                        </p>
                        <p className="cb">Please be patient, slow Heroku load time.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img src="images/pp.png" alt="Pliskovic Party" />
                    </div>
                    <div className="card-header">
                        <h3>pliskovicparty.com</h3>
                    </div>
                    <div className="card-copy">
                        <p>
              I got married on August 13, 2016. My UI designer wife, the
              beautiful{' '}
                            <a href="http://designer.pizza/" target="_blank">
                Sarah Pliske
                            </a>, and I teamed up to design and develop our wedding website.
                        </p>
                        <div className="modal-container">
                            <input id="modal-toggle4" type="checkbox" />
                            <label className="modal-backdrop" htmlFor="modal-toggle4" />
                            <div className="modal-content">
                                <label className="modal-close" htmlFor="modal-toggle4">
                  &#x2715;
                                </label>
                                <h2>pliskovicparty.com</h2>
                                <hr />
                                <p>
                  I got married on August 13, 2016. My UI designer wife, the
                  beautiful{' '}
                                    <a href="http://designer.pizza/" target="_blank">
                    Sarah Pliske
                                    </a>, and I teamed up to design and develop our wedding
                  website.
                                </p>
                                <div className="expander">
                                    <a
                                        href="javascript:void(0)"
                                        className="expander-trigger expander-hidden"
                                    >
                    View Screenshot
                                    </a>
                                    <div className="expander-content">
                                        <img src="images/screen-pp.png" />
                                    </div>
                                </div>
                                <label className="modal-content-btn" htmlFor="modal-toggle4">
                  OK
                                </label>
                            </div>
                            <label className="modal-btn" htmlFor="modal-toggle4">
                Read More <span>&rsaquo;</span>
                            </label>
                        </div>
                        <ul className="techs">
                            <li>Bourbon/Bourbon Neat</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>SASS</li>
                            <li>jQuery</li>
                        </ul>
                        <p>
                            <span>
                                <a href="http://pliskovicparty.com" target="_blank">
                  Live Site
                                </a>{' '}
                -{' '}
                                <a
                                    href="https://github.com/stephmilovic/wedding"
                                    target="_blank"
                                >
                  GitHub
                                </a>
                            </span>
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img src="images/histeph.png" alt="Steph Milovic Portfolio" />
                    </div>
                    <div className="card-header">
                        <h3>histeph.com</h3>
                    </div>
                    <div className="card-copy">
                        <p>
              This is my portfolio from 2014. A fun little site created with
              Bourbon/Bourbon Neat. I had a great time coding this and playing
              around with some SVG animations
                        </p>
                        <div className="modal-container">
                            <input id="modal-toggle5" type="checkbox" />
                            <label className="modal-backdrop" htmlFor="modal-toggle5" />
                            <div className="modal-content">
                                <label className="modal-close" htmlFor="modal-toggle5">
                  &#x2715;
                                </label>
                                <h2>histeph.com</h2>
                                <hr />
                                <p>
                  This is my portfolio from 2014. A fun little site created with
                  Bourbon/Bourbon Neat. I had a great time coding this and
                  playing around with some SVG animations
                                </p>
                                <div className="expander">
                                    <a
                                        href="javascript:void(0)"
                                        className="expander-trigger expander-hidden"
                                    >
                    View Screenshot
                                    </a>
                                    <div className="expander-content">
                                        <img src="images/screen-histeph.png" />
                                    </div>
                                </div>
                                <label className="modal-content-btn" htmlFor="modal-toggle5">
                  OK
                                </label>
                            </div>
                            <label className="modal-btn" htmlFor="modal-toggle5">
                Read More <span>&rsaquo;</span>
                            </label>
                        </div>
                        <ul className="techs">
                            <li>Bourbon/Bourbon Neat</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>SASS</li>
                            <li>jQuery</li>
                        </ul>
                        <p>
                            <span>
                                <a href="http://histeph.com" target="_blank">
                  Live Site
                                </a>{' '}
                -{' '}
                                <a href="https://github.com/stephmilovic/WTF" target="_blank">
                  GitHub
                                </a>
                            </span>
                        </p>
                    </div>
                </div>
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
              policy makers who’ve gone on to accomplish great things in Chicago
              and beyond.{' '}
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
              front-end architecture, and ended up as a finalist in the Product
              Manager of the Year category.{' '}
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
              She Hacks Chi is a (soon to be) annual cleverbridge hackathon that
              aims to close the gender gap in tech. We bring together beginner
              and intermediate coders together with experienced developers to
              hack in a supportive environment, developing applications to
              increase the number of women in tech.{' '}
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
              together Chicago-area developers of all skill levels and educators
              to collaborate on developing applications that extend learning in
              the classroom.{' '}
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
                            <span>Single Page Application development using JavaScript</span>
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
              3-day conference in New Orleans with a focus on JavaScript and Web
              Development.{' '}
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
              developers, designers and decision makers in the world focused on
              Internet software technologies such as JavaScript, HTML5, CSS,
              node.js and other cross platform web, mobile and server
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
        favorite front-end framework as of late is React/Redux. I have a B.A. in
        Arts Technology from Illinois State University. I currently work at{' '}
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
