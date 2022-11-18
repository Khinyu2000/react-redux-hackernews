import React from "react";

const ButtonInline = ({
    onClick,
    type = 'button',
    children,
}) => 
    <Button
        type={type}
        onClick={onClick}
        className="button-inline"
    >
        {children}
    </Button>



const Button = ({
    onClick,
    type = 'button',
    className,
    children
}) =>
    <button
        type={type}
        className={className}
        onClick={onClick}
    >
        {children}
    </button>

export {
    Button,
    ButtonInline,
};
