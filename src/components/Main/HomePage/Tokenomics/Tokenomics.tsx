import React, {FC, useEffect, useRef, useState} from "react";
import style from './tokenomics.module.scss';
import {SvgIcon} from "../../../common/SvgIcon/SvgIcon";
import useIntersectionObserver from "@react-hook/intersection-observer";
import clsx from "clsx";

interface ICard {
    title: string
    subtitle: string
    icon?: string
}


const cards: ICard[] = [
    {
        title: 'Contract Address:',
        subtitle: '0x5b31B8cA1770CF1F817146B4cD2078Bf8629bf8a',
        icon: 'copying',
    },
    {
        title: 'Total supply:',
        subtitle: '3,000,000 NS',
    },
    {
        title: 'Community airdrop:',
        subtitle: '600,000 NS (20%)',
    },
    {
        title: 'Pre-sale:',
        subtitle: '1,800,000 NS (60%)',
    },
    {
        title: 'Future development:',
        subtitle: '600,000 NS (20%)',
    },
];

export const Tokenomics: FC = () => {
    const onCopyHandler = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    const ref = useRef<HTMLDivElement>(null);
    const { isIntersecting } = useIntersectionObserver(
        ref,
        {
            threshold: 0.7
        }
    );
    const [intersected, setIntersected] = useState(false);
    const [intersected_1, setIntersected_1] = useState(false);
    useEffect(() => {
        let id: any;
        if (isIntersecting) {
            setIntersected(true);
            setTimeout(() => {
                setIntersected_1(true);
            }, 250);
        }
    }, [isIntersecting]);

    return (
        <div className={style.tokenomics}
             id='tokenomics'
             ref={ref}
        >
            <h2 className={clsx({
                [style.mainTitle]: true,
                [style.mainTitle_intersected]: intersected,
            })}
            >
                Tokenomics
            </h2>

            <div className={clsx({
                [style.cards]: true,
                [style.cards_intersected]: intersected_1,
            })}
            >
                {
                    cards.map((card, index) => (
                        <div className={style.card}
                             key={index}
                        >
                            <p className={style.title}>
                                {card.title}
                            </p>
                            <p className={style.subtitle}>
                                {card.subtitle}
                                {
                                    card.icon &&
                                    <>
                                        <span> </span>
                                        <span onClick={() => onCopyHandler(card.subtitle)}>
                                            <SvgIcon icon='copying'/>
                                        </span>

                                    </>

                                }

                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}