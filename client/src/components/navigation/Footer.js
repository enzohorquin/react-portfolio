import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
    <div className="footer">
        <div className="footer__icons">
        
            <a href="https://www.instagram.com/enzohorquin/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram footer__icons__icon"></i></a>
            <a href="https://github.com/enzohorquin" rel="noopener noreferrer" target="_blank"><i className="fab fa-github footer__icons__icon"></i></a>
            <a href="https://www.linkedin.com/in/enzo-nicolas-horquin-733190123/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin footer__icons__icon"></i></a>
        </div>

        <ul className="footer__list">
            <li className="footer__list__item"><NavLink to="skills" className="footer__list__item__link">Skills</NavLink></li>
            <p className="footer__list__pipe">|</p>
            <li className="footer__list__item"><NavLink to="work-history" className="footer__list__item__link">Work history</NavLink></li>
            <p className="footer__list__pipe">|</p>
            <li className="footer__list__item"><NavLink to="projects" className="footer__list__item__link">Projects</NavLink></li>
            <p className="footer__list__pipe">|</p>
            <li className="footer__list__item"><NavLink to="contact" className="footer__list__item__link">Contact</NavLink></li>      
            <p className="footer__list__pipe">|</p>
            <li className="footer__list__item"><NavLink to="education" className="footer__list__item__link">Education</NavLink></li>    </ul>
    </div>
);

export default Footer;