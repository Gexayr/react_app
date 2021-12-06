import React, {FC} from "react";
import style from './preSale.module.scss'

export const PreSale: FC = () => {
    return (
        <div className={style.preSale}>
            <h1 className={style.title}>
                <span>Pre-sale </span>
                <span>is Live</span>
            </h1>

            <div className={style.blocks}>

                <div className={style.block}>
                    <p>
                        Pre-sale supply:
                    </p>
                    <p>
                        1,800,000
                    </p>
                </div>

                <div className={style.block}>
                    <p>
                        Pre-sale address:
                    </p>
                    <p>
                        0x6182f213A6904Df9451E00e6F7716D95a39AFaFB
                    </p>
                </div>

                <div className={style.block}>
                    <p>
                        Pre-sale price:
                    </p>
                    <p>
                        1 ETH = 10,000 NS
                    </p>
                </div>

            </div>

            <p className={style.description}>
                Use your wallet to send ETH to the Pre-sale address. Our system will send NS tokens to your wallet instantly.
                The minimum purchase is 0.1 ETH, and the maximum purchase is 10 ETH.
            </p>
        </div>
    )
}