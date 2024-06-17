import Icon from "../Icon"
import { FC, useEffect, useState } from "react";

type ButtonItem = {
    href?: string
    title: string
    className?: string
}


const ButtonInfo: FC<ButtonItem> = ({ href, title, className }) => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        setShow(window.innerWidth > 1023)
        const handleResize = () => {
            setShow(window.innerWidth > 1023);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <a href={href} className={`${show ? 'button-info' : 'button-info button-low-viewport'} ${className}`}>{title}
            <Icon width="24" height="26" viewBox="0 0 24 26" iconId={"Arrow"} />
        </a>
    )
}
export default ButtonInfo