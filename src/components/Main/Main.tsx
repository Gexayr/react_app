import React from "react";
import { Routes, Route } from 'react-router-dom';
import { HomePage } from "./HomePage/HomePage";
import { PreSalePage } from "./PreSalePage/PreSalePage";
import {AirdropPage} from "./AirdropPage/AirdropPage";
import style from './main.module.scss';

export const Main = () => {

    return (
        <div className={style.main}>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/pre-sale' element={<PreSalePage/>} />
                <Route path='/airdrop' element={<AirdropPage/>} />
            </Routes>
        </div>
    )
};