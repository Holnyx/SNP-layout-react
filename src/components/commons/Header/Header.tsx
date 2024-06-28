import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import  Icon  from '../Icon';
import headerLinkState from './headerLinkItems';
import { useScroll } from '../../context/ScrollContext';


const Header = () => {
    const scrollY = useScroll();
    const isSticky = scrollY > 450;
    return (
        <header className={`header ${isSticky ? 'show' : ''}`} id="header" style={{ position: `${isSticky ? 'fixed' : 'absolute'}` }}>
            <div className="header wrapper">
                <Link to="link-start" activeClass="active" spy={true} smooth={true} style={{ cursor: 'pointer' }}>
                    <Icon className={'header__logo'} iconId={'YourTour'}
                        width='182' height='30' viewBox='0 0 182 30'
                    />
                </Link>
                    <nav>
                        <ul className='header__list'>
                            {headerLinkState.map((link, i) =>
                                <li key={i}>
                                    <Link className="list__item list__item--hover" offset={-100}
                                        activeClass="active" spy={true} smooth={true} to={link.href}>{link.title}</Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                <span>
                    <a className='list__item' href="tel:7 999 999 99 99"> +7 999 999 99 99</a>
                </span>
            </div>
        </header>
    );
};
export default Header
