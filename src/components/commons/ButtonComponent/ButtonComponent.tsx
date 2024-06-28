import Icon from "../Icon"
import { FC, useEffect, useState } from "react";

type ButtonItem = {
    href?: string
    title: string
    className?: string
}


const ButtonInfo: FC<ButtonItem> = ({ href, title, className }) => {
    return (
        <a href={href} className={`${'button-info'} ${className}`}>{title}
            <Icon width="24" height="26" viewBox="0 0 24 26" iconId={"Arrow"} />
        </a>
    )
}
export default ButtonInfo