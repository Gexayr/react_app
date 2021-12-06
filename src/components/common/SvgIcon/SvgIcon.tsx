import React from 'react';
import svgSprite from '../../../assets/icons.symbol.svg';

export const SvgIcon:React.FC<{icon: string}> = (props) => (
    <svg className={`icon icon-${props.icon}`}>
        <use xlinkHref={`${svgSprite}#${props.icon}`} />
    </svg>
);
