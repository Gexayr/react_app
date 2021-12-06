import React from "react";
import style from './welcome.module.scss';
import {ImageBlock} from "./ImageBlock/ImageBlock";
import { Link } from "react-router-dom";

export const Welcome = () => {
    return (
        <div className={style.welcome}>
            <div className={style.imageBlock}>
                <ImageBlock />
            </div>

            <div className={style.textBlock}>

                <h1 className={style.title}>
                    <p>Welcome to the</p>
                    <p> Name project</p>
                </h1>

                <p className={style.description}>
                    NFTs and the Metaverse are the future, but investing in the space isn’t easy. We make it simple.
                </p>

                <Link to='/pre-sale'
                      className={style.link}
                >
                    PRE-SALE
                </Link>

            </div>



        </div>
    )
}