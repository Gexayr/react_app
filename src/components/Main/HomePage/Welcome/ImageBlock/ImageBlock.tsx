import React, {useEffect, useState} from "react";
import style from './imageBlock.module.scss';
import src0 from '../../../../../assets/img/00.jpg';
import src1 from '../../../../../assets/img/01.jpg';
import src2 from '../../../../../assets/img/02.jpg';
import src3 from '../../../../../assets/img/03.jpg';
import mask from '../../../../../assets/img/welcome-mask.png'
import clsx from "clsx";
import './style.css'


export const ImageBlock = () => {
    const srcs = [src0, src1, src2, src3];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timeId = setTimeout(() => {
            setIndex(index => (index + 1) % 4);

        }, 2000);
        return () => clearTimeout(timeId);
    }, [index]);

    useEffect(() => {
        //console.log(index)
    }, [index])

    return (
        <div className={style.imageBlock}>
            <img src={srcs[index]}
                 alt="Welcome to the Name project"
                 className={style.image}
            />

            <img className={style.mask}
                 src={mask}
                 alt=""
            />

            <div className={clsx({
                [style.back]: true,
                'image-block-animation': true
            })}
            />

        </div>
    )
}