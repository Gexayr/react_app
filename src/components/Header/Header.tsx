import React from 'react';
import style from './header.module.scss';
import {HashLink} from 'react-router-hash-link';

export const logotype = 'Logotype'
export const links = [
    {
        title: 'About',
        link: 'about',
    },
    {
        title: 'Tokenomics',
        link: 'tokenomics',
    },
    {
        title: 'Roadmap',
        link: 'roadmap',
    },
    {
        title: 'Team',
        link: 'team',
    },
    {
        title: 'Community',
        link: 'community',
    },
    {
        title: 'Pre-sale',
        link: 'pre-sale',
    },
    {
        title: 'Airdrop',
        link: 'airdrop',
    },
];

export const Header = () => {

    return (
        <header className={style.header}>
            <HashLink className={style.logo}
                      to='/'
            >
                {logotype}
            </HashLink>

            <nav className={style.links}>
                {
                    links.map(({link, title}, index) => (
                        <HashLink key={index}
                                  to={
                                      link === 'pre-sale' || link === 'airdrop'
                                          ? `/${link}`
                                          : `/#${link}`
                                  }
                                  className={style.link}
                        >
                            {title}
                        </HashLink>
                    ))
                }
            </nav>

            <a className={style.button}
               href="#"
            >
                Connect Wallet
            </a>

        </header>
    );
}


