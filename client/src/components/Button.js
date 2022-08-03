import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline ', 'btn--disabled']

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']

const COLORS = ['primary']

const DISABLED = ['enabled', 'already-added']

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize, 
    buttonColor,
    disableFeature,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]
    const checkButtonColor = STYLES.includes(buttonColor) ? buttonColor : COLORS[0]
    const checkDisable = STYLES.includes(disableFeature) ? disableFeature : DISABLED[0]

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor} ${checkDisable}`} onClick={onClick} type={type}>{children}</button>
    )
}