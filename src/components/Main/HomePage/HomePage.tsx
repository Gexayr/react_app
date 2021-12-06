import React from "react";
import {Welcome} from "./Welcome/Welcome";
import {About} from "./About/About";
import style from './homePage.module.scss';
import {Roadmap} from "./Roadmap/Roadmap";
import {Team} from "./Team/Team";
import {Tokenomics} from "./Tokenomics/Tokenomics";
import {Community} from "./Community/Community";

export const HomePage = () => {
    return (
        <div className={style.homePage}>
            <Welcome/>
            <About/>
            <Tokenomics />
            <Roadmap/>
            <Team/>
            <Community/>
        </div>
    )
}