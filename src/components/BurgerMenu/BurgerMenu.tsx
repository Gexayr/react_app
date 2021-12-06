import React, {FC} from "react";
import clsx from "clsx";
import style from './burgerMenu.module.scss';
import {Link} from "react-router-dom";
import {links, logotype} from "../Header/Header";
import mask from '../../assets/img/burger-mask.png'
import {HashLink} from "react-router-hash-link";


export interface IBurgerMenu {
    isBurgerIsOpen: boolean
    onClickHandler: () => void
}

export const BurgerMenu: FC<IBurgerMenu> = ({isBurgerIsOpen, onClickHandler}) => {
    return (
        <div className={clsx({
            [style.burgerMenu]: true,
            [style.burgerMenu_open]: isBurgerIsOpen,
        })}>
            <p className={style.logo}>
                {logotype}
            </p>

            <div className={style.linksWrapper}>
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
                                      onClick={onClickHandler}
                            >
                                {title}
                            </HashLink>
                        ))
                    }
                    <div className={style.radialGradient}/>
                    <img className={style.mask}
                         src={mask}
                         alt=""
                    />
                </div>
            </div>


            <a href="#"
               className={style.button}
               onClick={onClickHandler}
            >

                Connect Wallet
            </a>


        </div>
    )
}