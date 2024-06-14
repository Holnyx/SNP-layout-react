import React, { FC } from 'react';

type ButtonItem = "submit" | "reset" | "button" | undefined

type ButtonFormPropsItem = {
    className: string
    type: ButtonItem
    title: string
    id?: string
    onClick?: () => void
}


const ButtonForm: FC<ButtonFormPropsItem> = ({ className, title, type, id, onClick}) => {
    return (
        <button className={className} type={type} id={id} onClick={onClick}>{title}</button>
    );
};

export default ButtonForm