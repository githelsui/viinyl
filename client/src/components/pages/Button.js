import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline ']

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']

const COLOR = ['primary']

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize, 
    buttonColor
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : STYLES[0]
    const checkButtonColor = STYLES.includes(buttonColor) ? buttonColor : STYLES[0]

    return (
        // <button></button>
        // { btn ${checkButtonStyle} ${checkButtonSize ${checkButtonColor} }
        <button className={``} onClick={onClick} type={type}>{children}</button>
    )
}