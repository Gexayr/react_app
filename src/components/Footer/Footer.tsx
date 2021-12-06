import React, {FC} from "react";
import style from './footer.module.scss'
import {HashLink} from "react-router-hash-link";
import {links} from "../Header/Header";

export const Footer: FC = () => {
    return (
        <footer className={style.footer}>
            <nav className={style.linksBlock}>

                <div className={style.links}>
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
                </div>

                <a className={style.private}
                   href="#"
                >
                    Privacy Policy
                </a>

            </nav>

            <p className={style.rights}>
                © 2021, Company Name. All rights reserved
            </p>



        </footer>
    )
}