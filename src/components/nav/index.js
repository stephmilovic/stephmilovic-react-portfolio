import React from 'react';
import style from './nav.scss';

export default () => (
    <nav className={style['main-nav']}>
        <ul>
            <li>
                <a className="scroll-on-page-link" href="#scroll-link-1">
          Work
                </a>
            </li>
            <li>
                <a className="scroll-on-page-link" href="#scroll-link-2">
          Extracurriculars
                </a>
            </li>
            <li>
                <a className="scroll-on-page-link" href="#scroll-link-3">
          About Me
                </a>
            </li>
            <li>
                <a className="scroll-on-page-link" href="#scroll-link-4">
          Get In Touch
                </a>
            </li>
        </ul>
    </nav>
);
