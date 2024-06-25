import React from 'react';
import  Icon  from '../Icon';
import  FooterLinkState  from './footerLinkItems';

const Footer = () => {
    return (
        <footer className="footer-color">
            <div className="wrapper footer">
                <span>Наши социальные сети</span>
                <div className="social-link">
                    {FooterLinkState.map((el,i) =>
                        <a key={i} href={el.href}>
                            <Icon iconId={el.iconId} width='23' height='23' viewBox='0 0 23 23' />
                            <span>{el.title}</span>
                        </a>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer