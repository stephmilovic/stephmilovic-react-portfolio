import { connect, createStore } from 'undux';

export default connect(
    createStore({
        projects: [
            {
                featuredImage: 'images/swapify3.png',
                name: 'Swapify',
                summary:
          'Swapify is a full-stack application that "swaps" out modularized front-end components to create different design patterns.',
                description:
          'Swapify is a WYSIWYG editor that enables cleverbridge clients to customize their online shopping carts without coding experience. Users select a theme which they are then able to fully customize, from changing fonts, colors, and layouts to swaping out entire shopping cart components such as payment options and order steps. Swapify makes creating and testing different design patterns a breeze, making sales demos more effective and relevant, enabling painless A/B testing for analytics teams, and generally allowing clients to find the pattern that’s best for their conversion.',
                tags: [
                    'React',
                    'Redux',
                    'Node.js',
                    'CouchDB',
                    'Radium',
                    'CSS Modules',
                    'Sass',
                    'Webpack',
                    'Mocha/Chai',
                ],
                images: [
                    'images/screen-swap-main.png',
                    'images/screen-swap-layout.png',
                    'images/screen-swap-header.png',
                    'images/screen-swap-payment.png',
                    'images/screen-swap-history.png',
                    'images/screen-swap-admin.png',
                ],
                privateMsg:
          'This project contains sensitive content and is not available for public viewing.',
            },
            {
                featuredImage: 'images/sassy.png',
                name: 'Sassy',
                summary:
          'A design architecture and set of modularized components for the cleverbridge front-end development team to use while coding client e-commerce websites.',
                description:
          'A design architecture and set of modularized components for the cleverbridge front-end development team to use while coding client e-commerce websites. From one base repository, billions of design combinations can be executed instantaneously utilizing Sass variables.',
                tags: ['Sass', 'jQuery', 'Gulp'],
                images: ['images/screen-sassy.png'],
                privateMsg:
          'This project contains sensitive content and is not available for public viewing.',
            },
            {
                featuredImage: 'images/partial.png',
                name: 'Partial Library',
                summary:
          'A searchable reference library of the many modules available on the cleverbridge ecosystem, plus the corresponding style blocks (or partials) for each.',
                description:
          "A searchable reference library of the many modules available on the cleverbridge ecosystem, plus the corresponding style blocks (or partials) for each. When a teammate creates a popular new partial, he or she can submit the partial to the library in real time, enabling the team to share and re-use one another's work. Altogether, the code base and partial library effectively cut the time it takes to develop a cart in half, increasing the efficiency of the entire front-end team by 200%.",
                tags: ['AngularJS', 'Node.js', 'MongoDB', 'ExpressJS', 'Sass'],
                images: [
                    'images/screen-partial-lib.png',
                    'images/screen-partial-partial.png',
                    'images/screen-partial-fc.png',
                ],
                privateMsg:
          'This project contains sensitive content and is not available for public viewing.',
            },
            {
                featuredImage: 'images/cpu.png',
                name: 'CPU to EDU',
                summary:
          'CPU to EDU is an application that connects businesses who wish to donate their retired computers, tablets, and other technology with Chicago students in need.',
                description:
          "CPU to EDU is an application that connects businesses who wish to donate their retired computers, tablets, and other technology with Chicago students in need. Developed during cleverbridge's Hack to the Future Hackathon, our goal is to provide the resources to help students extend learning in the classroom and beyond.",
                tags: ['React', 'Redux', 'Node.js', 'Webpack', 'CSS Modules', 'Sass'],
                images: [
                    'images/screen-partial-lib.png',
                    'images/screen-partial-partial.png',
                    'images/screen-partial-fc.png',
                ],
                siteLink: 'https://cputoedu.herokuapp.com/',
                siteGithub: 'https://github.com/stephmilovic/BusinessToSchoolCPU/',
                privateMsg: 'Please be patient, slow Heroku load time.',
            },
            {
                featuredImage: 'images/pp.png',
                name: 'pliskovicparty.com',
                summary:
          'I got married on August 13, 2016. My visual designer wife, the beautiful Sarah Pliske, and I teamed up to design and develop our wedding website.',
                description:
          'I got married on August 13, 2016. My visual designer wife, the beautiful Sarah Pliske, and I teamed up to design and develop our wedding website.',
                tags: ['Bourbon/Bourbon Neat', 'HTML5', 'CSS3', 'Sass', 'jQuery'],
                images: [
                    'images/screen-partial-lib.png',
                    'images/screen-partial-partial.png',
                    'images/screen-partial-fc.png',
                ],
                siteLink: 'http://pliskovicparty.com/',
                siteGithub: 'https://github.com/stephmilovic/wedding/',
            },
            {
                featuredImage: 'images/histeph.png',
                name: 'histeph.com',
                summary:
          'This is my portfolio from 2014. A fun little site created with Bourbon/Bourbon Neat. I had a great time coding this and playing around with some SVG animations.',
                description:
          'This is my portfolio from 2014. A fun little site created with Bourbon/Bourbon Neat. I had a great time coding this and playing around with some SVG animations.',
                tags: ['Bourbon/Bourbon Neat', 'HTML5', 'CSS3', 'Sass', 'jQuery'],
                images: [
                    'images/screen-partial-lib.png',
                    'images/screen-partial-partial.png',
                    'images/screen-partial-fc.png',
                ],
                siteLink: 'http://histeph.com/',
                siteGithub: 'https://github.com/stephmilovic/WTF/',
            },
        ],
    }),
);
