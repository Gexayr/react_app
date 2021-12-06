import {Formik, FormikHelpers, FormikProps} from "formik";
import React, {FC, useEffect, useRef, useState} from "react";
import style from './airdrop.module.scss'
import clsx from "clsx";
import {SvgIcon} from "../../../common/SvgIcon/SvgIcon";
import Modal from 'react-modal';
import useIntersectionObserver from "@react-hook/intersection-observer";

interface IValues {
    address: string
}

interface IItem {
    value: string
    text: string
}

const items: IItem[] = [
    {
        value: '40 NS',
        text: 'Balance',
    },
    {
        value: '50',
        text: 'Referred',
    },
    {
        value: '510 NS',
        text: 'Rewards',
    },
];
export const getDays = (ms: number) => {
    const days = Math.trunc(ms / (60000 * 60 * 24));
    return days
}
export const getHours = (ms: number) => {
    const min = ms / 60000;
    const days = Math.trunc(min / (60 * 24));
    const hours = Math.trunc(((min - days * 24 * 60)) / 60);
    return hours;
}
export const getMins = (ms: number) => {
    const min = ms / 60000;
    const days = Math.trunc(min / (60 * 24));
    const hours = Math.trunc(((min - days * 24 * 60)) / 60);
    const minutes = Math.trunc(min - days * 24 * 60 - hours * 60)
    return minutes;
}
export const getSecs = (ms: number) => {
    const secs = ms / 1000;
    const days = Math.trunc(secs / (60 * 60 * 24));
    const hours = Math.trunc(((secs - days * 24 * 60 * 60)) / (60 * 60));
    const minutes = Math.trunc((secs - days * 24 * 60 * 60 - hours * 60 * 60) / 60);
    const seconds = Math.trunc(secs - days * 24 * 60 * 60 - hours * 60 * 60 - 60 * minutes);
    return seconds;
}


const dateEnd = new Date(2021, 11, 24, 5, 55, 30); // дата окончания
export const convertToTwoDigit = (num: number): string => num > 9 ? String(num) : `0${num}`;

///////////////////////////////////////////////////
export let Airdrop: React.FC;
Airdrop = () => {

    const initialValues = {
        address: ''
    };

    const data = {
        address: '',
        refLink: '',
    };

// ====================================
// ====================================

    const [submit, setSubmit] = useState(false);


    const onSubmitHandler = (
        values: IValues,
        formikHelpers: FormikHelpers<IValues>
    ) => {
        console.log(values.address);
        data.address = values.address;
        setSubmit(true);
        generateRefLink(values);
        formikHelpers.setSubmitting(false);
    };

    const [focus, setFocus] = useState(false);

    const onFocusHandler = () => {
        setFocus(true);
    };

    const validate = (values: IValues) => {
        const errors: {
            address?: string
        } = {};
        if (!values.address) {
            errors.address = 'no values'
        }
    };

    const [isOpen, setIsOpen] = useState(false);

    ///////////////////////////////////////////////////
    const [timeIsOver, setTimeIsOver] = useState(false);
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);

    const generateRefLink = (values: IValues) => {
        if (localStorage.getItem(`${values.address}`) == null) {
            data.refLink = Math.random().toString(36).substring(2, 12);
            localStorage.setItem(`${values.address}`, `${data.refLink}`);
            // @ts-ignore
            document.querySelector("#myspan").textContent = `https://domainname.net/${data.refLink}`;
        } else {
            // @ts-ignore
            document.querySelector("#myspan").textContent = `https://domainname.net/${localStorage.getItem(values.address)}`;
        }
    };


    useEffect(() => {
        const time = new Date(dateEnd.getTime() - new Date().getTime()).getTime();
        if (time > 0 && !timeIsOver) {
            setTime(time);
            setStart(true);
        }
    }, []);
    useEffect(() => {
        const timeId = setTimeout(() => {
            if (start) {
                if (time <= 60000) {
                    setTimeIsOver(true);
                    clearTimeout(timeId);
                } else {
                    setTime(time => time - 1000);
                }
            }
        }, 1000);
        return () => {
            clearTimeout(timeId);
        }
    }, [time]);


    return (
        <div className={style.airdrop}>
            <h2 className={style.title}>Airdrop</h2>

            {
                !submit
                    ? (
                        <>
                            <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod
                            </p>
                            <Formik
                                initialValues={initialValues}
                                onSubmit={onSubmitHandler}
                                validate={validate}
                            >
                                {
                                    (props: FormikProps<IValues>) => (
                                        <form onSubmit={props.handleSubmit}
                                              className={clsx({
                                                  [style.form]: true,
                                                  [style.form_selected]: focus,
                                              })}
                                        >

                                            <input className={clsx({
                                                [style.input]: true,
                                                [style.input_selected]: focus,
                                            })}
                                                   type="text"
                                                   placeholder='Input Your ETH address'
                                                   id="address"
                                                   onChange={props.handleChange}
                                                   onBlur={
                                                       //props.handleBlur
                                                       (e) => {
                                                           props.handleBlur(e);
                                                           setFocus(false);
                                                       }
                                                   }
                                                   value={props.values.address}
                                                   onFocus={onFocusHandler}
                                            />

                                            <button type="submit" disabled={props.isSubmitting}>
                                                Submit
                                            </button>

                                        </form>
                                    )
                                }
                            </Formik>
                        </>
                    )
                    : (
                        <div className={style.infoBlock}>
                            <p className={style.link}>
                                <span>Refer Link: </span>
                                <span
                                    id="myspan"
                                >https://domainname.net/{data.refLink}</span>
                                <span> </span>
                                <span>
                                    <SvgIcon icon='copying'/>
                                </span>

                            </p>
                            <p className={style.text}>
                                Copy and share your refer link, you and the invitee will be rewarded 10 NS at the same time,
                                each person can invite up to 50 people, and the reward can be up to 500 NS tokens.
                            </p>
                            <div className={style.bottomBlock}>
                                <div className={style.items}>
                                    {
                                        items.map((item, i) => (
                                            <div className={style.item} key={i}>
                                                <p>{item.value}</p>
                                                <p>{item.text}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <button onClick={() => setIsOpen(true)}>
                                    Withdraw
                                </button>
                            </div>
                        </div>
                    )
            }

            <div className={style.timeBlock}>
                <p>Until the end:</p>
                <p>
                    <span>{convertToTwoDigit(getDays(time))}</span>
                    <span> Days</span>
                    <span> : </span>
                    <span>{convertToTwoDigit(getHours(time))}</span>
                    <span> HOURS</span>
                    <span> : </span>
                    <span>{convertToTwoDigit(getMins(time))}</span>
                    <span> minutes</span>
                    <span> : </span>
                    <span>{convertToTwoDigit(getSecs(time))}</span>
                    <span> seconds</span>

                </p>
            </div>

            <Modal isOpen={isOpen}
                   className={style.modalContent}
                   overlayClassName={style.modalOverlay}
            >
                <div className={style.inner}>
                    <div className={style.close}
                         onClick={() => setIsOpen(false)}
                    >
                        <SvgIcon icon='close'/>
                    </div>

                    <p className={style.title}>
                        Popup title
                    </p>
                    <p className={style.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                </div>
            </Modal>

        </div>
    )
};