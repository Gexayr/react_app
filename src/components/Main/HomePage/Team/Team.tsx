import React, {FC, useEffect, useRef, useState} from "react";
import style from './team.module.scss';
import src0 from '../../../../assets/img/00.jpg';
import src1 from '../../../../assets/img/01.jpg';
import src2 from '../../../../assets/img/02.jpg';
import src3 from '../../../../assets/img/03.jpg';

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import {SvgIcon} from "../../../common/SvgIcon/SvgIcon";
import {links} from "../../../Header/Header";
import useIntersectionObserver from "@react-hook/intersection-observer";
import clsx from "clsx";

const srcs = [src0, src1, src2, src3];

export interface ISlide {
    src: string
    name: string
    position: string
    linkedIn?: string
    instagram?: string
}

const sliders: ISlide[] = [
    {
        src: srcs[0],
        name: 'CYBER DOC 0',
        position: 'The Co-Founder',
        linkedIn: '#',
        instagram: '#',
    },
    {
        src: srcs[1],
        name: 'CYBER DOC 1',
        position: 'The Co-Founder',
        instagram: '#',
    },
    {
        src: srcs[2],
        name: 'CYBER DOC 2',
        position: 'The Co-Founder',
        linkedIn: '#',
    },
    {
        src: srcs[3],
        name: 'CYBER DOC 3',
        position: 'The Co-Founder',
        linkedIn: '#',
        instagram: '#',
    },
    {
        src: srcs[0],
        name: 'CYBER DOC 0',
        position: 'The Co-Founder',
        linkedIn: '#',
        instagram: '#',
    },
    {
        src: srcs[1],
        name: 'CYBER DOC 1',
        position: 'The Co-Founder',
        instagram: '#',
    },
    {
        src: srcs[2],
        name: 'CYBER DOC 2',
        position: 'The Co-Founder',
        linkedIn: '#',
    },
    {
        src: srcs[3],
        name: 'CYBER DOC 3',
        position: 'The Co-Founder',
        linkedIn: '#',
        instagram: '#',
    },
]


export const Team: FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { isIntersecting } = useIntersectionObserver(
        ref,
        {
            threshold: 0.5
        }
    );
    const [intersected, setIntersected] = useState(false);
    const [intersected_1, setIntersected_1] = useState(false);
    const [intersected_2, setIntersected_2] = useState(false);
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
        }
    }, [isIntersecting]);


    return (
        <div className={style.team}
             id='team'
             ref={ref}
        >
            <div className={style.firstBlock}>
                <h2 className={clsx({
                    [style.title]: true,
                    [style.title_intersected]: intersected,
                })}>
                    <span>Our </span>
                    <span>team</span>
                </h2>

                <p className={clsx({
                    [style.text]: true,
                    [style.text_intersected]: intersected_1,
                })}>
                    The Billionaire club was created by a team of digital native: Entrepreneurs, Blockchain experts
                </p>

            </div>

            <div className={clsx({
                [style.secondBlock]: true,
                [style.secondBlock_intersected]: intersected_2,
            })}>
                <Swiper className={style.swiper}
                        breakpoints={{
                            0: {
                                slidesPerView: 'auto',
                                spaceBetween: 20,
                            },
                            1440: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                                allowTouchMove: false,
                            },
                        }}
                >
                    {
                        sliders.map((slide, index) => (
                            <SwiperSlide key={index}
                                         className={style.slide}
                            >

                                <img src={slide.src}
                                     className={style.image}
                                     alt=""
                                />

                                <p className={style.name}>
                                    {slide.name}
                                </p>

                                <p className={style.position}>
                                    {slide.position}
                                </p>

                                <div className={style.socialBlock}>
                                    {
                                        slide.instagram &&
                                        <a href={slide.instagram}>
                                            <SvgIcon icon='instagram'/>
                                        </a>
                                    }
                                    {
                                        slide.linkedIn &&
                                        <a href={slide.linkedIn}>
                                            <SvgIcon icon='linkedIn'/>
                                        </a>
                                    }
                                </div>

                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </div>
    )
}