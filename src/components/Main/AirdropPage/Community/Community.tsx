import React, {FC, useEffect, useRef, useState} from "react";
import style from './community.module.scss'
import {links} from "../../../Header/Header";
import {SvgIcon} from "../../../common/SvgIcon/SvgIcon";
import clsx from "clsx";
import useIntersectionObserver from "@react-hook/intersection-observer";
import mask from '../../../../assets/img/welcome-mask.png';

interface ICard {
    link: string
    title: string
    icon: string
}

const cards: ICard[] = [
    {
        link: '#',
        title: 'Telegram',
        icon: 'telegram',
    },
    {
        link: '#',
        title: 'Twitter',
        icon: 'twitter',
    },
    // {
    //     link: '#',
    //     title: 'Discord',
    //     icon: 'discord',
    // },
    // {
    //     link: '#',
    //     title: 'Email',
    //     icon: 'email',
    // },
];


export const Community: FC = () => {

    const ref = useRef<HTMLDivElement>(null);
    const { isIntersecting } = useIntersectionObserver(
        ref,
        {
            threshold: 0.7
        }
    );
    const [intersected, setIntersected] = useState(false);
    const [intersected_1, setIntersected_1] = useState(false);
    const [intersected_2, setIntersected_2] = useState(false);
    const [intersected_3, setIntersected_3] = useState(false);
    const [intersected_4, setIntersected_4] = useState(false);
    const arrayIntersected = [
        intersected_1,
        intersected_2,
        intersected_3,
        intersected_4,
    ];

    useEffect(() => {
        let id: any;
        if (isIntersecting) {
            setIntersected(true);
            setTimeout(() => {
                setIntersected_1(true);
            }, 250);
            setTimeout(() => {
                setIntersected_2(true);
            }, 500);
            setTimeout(() => {
                setIntersected_3(true);
            }, 750);
            setTimeout(() => {
                setIntersected_4(true);
            }, 1000);
        }
    }, [isIntersecting]);

    return (
        <div className={style.community}
             id='community'
             ref={ref}
        >

            <img className={style.mask}
                 src={mask}
                 alt=""
            />

            <h2 className={clsx({
                [style.title]: true,
                [style.title_intersected]: intersected,
            })}
            >
                <span>Our</span>
                <span> community</span>
            </h2>

            <div className={style.cards}>
                {
                    cards.map((card, index) => (
                        <a href={card.link}
                           key={index}
                           className={clsx({
                               [style.card]: true,
                               [style[`card_${card.icon}`]]: true,
                               [style.card_intersected]: arrayIntersected[index],
                           })}
                        >
                            <SvgIcon icon={card.icon}/>
                            <p>{card.title}</p>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}