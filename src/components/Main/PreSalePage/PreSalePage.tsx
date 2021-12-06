import React from "react";
import style from './preSalePage.module.scss'
import {PreSale} from "./PreSale/PreSale";

export const PreSalePage = () => {
    return (
        <div className={style.preSalePage}>
            <PreSale/>
        </div>
    )
}