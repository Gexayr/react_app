import style from './airdropPage.module.scss'
import React from "react";
import {Community} from "./Community/Community";
import {Airdrop} from "./Airdrop/Airdrop";

export const AirdropPage = () => {
    return (
        <div className={style.airdropPage}>
            <Community/>
            <Airdrop/>
        </div>
    )
}