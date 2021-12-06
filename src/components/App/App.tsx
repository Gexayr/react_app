import React, {useState} from 'react';
import style from './app.module.scss';
import {Header} from "../Header/Header";
import {Main} from "../Main/Main";
import {SvgIcon} from "../common/SvgIcon/SvgIcon";
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";
import { Footer } from '../Footer/Footer';

export const App = () => {
    const [isBurgerIsOpen, setBurgerIsOpen] = useState(false);


    return (
        <div className={style.app}
             style={
                 isBurgerIsOpen
                     ? {
                         overflow: "hidden",
                         height: "100vh"
                     }
                     : {}
             }
        >
            <button className={style.burger}
                    onClick={() => setBurgerIsOpen(isBurgerIsOpen => !isBurgerIsOpen)}
            >
                {
                    isBurgerIsOpen
                        ? <SvgIcon icon='close'/>
                        : <SvgIcon icon='burger'/>
                }
            </button>
            <BurgerMenu isBurgerIsOpen={isBurgerIsOpen}
                        onClickHandler={() => setBurgerIsOpen(false)}
            />
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}


