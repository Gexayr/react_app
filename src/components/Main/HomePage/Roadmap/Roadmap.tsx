import React, {FC, useEffect, useRef, useState} from "react";
import style from './roadmap.module.scss';
import {links} from "../../../Header/Header";
import {SvgIcon} from "../../../common/SvgIcon/SvgIcon";
import clsx from "clsx";
import src0 from '../../../../assets/img/00.jpg';
import src1 from '../../../../assets/img/01.jpg';
import src2 from '../../../../assets/img/02.jpg';
import src3 from '../../../../assets/img/03.jpg';
import mask from '../../../../assets/img/welcome-mask.png';
import useIntersectionObserver from "@react-hook/intersection-observer";


export interface IItem {
    title: string
    text: string
    check: boolean
}

const items: IItem[] = [
    {
        title: 'Open Sale',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        check: true,
    },
    {
        title: 'Open Sale',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        check: true,
    },
    {
        title: 'Open Sale',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        check: false,
    },
    {
        title: 'Open Sale',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        check: false,
    },
    {
        title: 'Open Sale',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        check: false,
    },
    {
        title: 'Open Sale',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        check: false,
    },
];


export const Roadmap: FC = () => {


    const ref = useRef<HTMLDivElement>(null);
    const { isIntersecting } = useIntersectionObserver(
        ref,
        {
            threshold: 0.3
        }
    );
    const [intersected1, setIntersected1] = useState(false);
    const [intersected2, setIntersected2] = useState(false);
    useEffect(() => {
        let id: any;
        if (isIntersecting) {
            setIntersected1(true);
            id = setTimeout(() => {
                setIntersected2(true);
            }, 300);

        }
    }, [isIntersecting]);

    return (
        <div className={style.roadmap}
             id='roadmap'
             ref={ref}
        >

            <img className={style.mask1}
                src={mask}
                 alt=""
            />

            <img className={style.mask2}
                 src={mask}
                 alt=""
            />

            <div className={clsx({
                [style.firstBlock]: true,
                [style.firstBlock_intersected]: intersected1,
            })}>

                <h2 className={style.title}>
                    <span>Our</span>
                    <span> roadmap</span>
                </h2>

                <p className={style.text}>
                    We won’t leave our community behind- our roadmap will be produced in consultation
                </p>
                
                <div className={style.images}>
                    <img src={src0} alt=""/>
                    <img src={src1} alt=""/>
                    <img src={src2} alt=""/>
                    <div>
                        <img src={src3} alt=""/>
                    </div>

                </div>

            </div>

            <div className={clsx({
                [style.secondBlock]: true,
                [style.secondBlock_intersected]: intersected2,
            })}>
                <div className={style.items}>
                    {
                        items.map((item, index) => (
                                <div key={index}
                                     className={style.itemWrapper}
                                >
                                    <div className={style.innerWrapper}>
                                        <p className={style.title}>{item.title}</p>
                                        <p className={style.text}>{item.text}</p>

                                    </div>

                                    <div className={clsx({
                                        [style.circle]: true,
                                        [style.circle_selected]: item.check,
                                    })}>
                                        {
                                            item.check &&
                                            <SvgIcon icon='check'/>
                                        }
                                    </div>

                                </div>
                            )
                        )
                    }
                </div>

                <div className={style.images}>
                    <div className={style.top}>
                        <img src={src0} alt=""/>
                        <img src={src1} alt=""/>
                    </div>
                    <div className={style.bottom}>
                        <img src={src3} alt=""/>
                    </div>
                </div>
            </div>


        </div>
    )
}