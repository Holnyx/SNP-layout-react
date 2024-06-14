import React, { FC } from 'react';

type CustomRadioPropsItem ={
    id: string
    htmlFor: string
    title: string
    name: string
}

const CustomRadio: FC<CustomRadioPropsItem> = ({id, htmlFor, title, name}) => {
    return (
        <div className="form__check-yes-no-flex">
            <input className="real-radio" type="radio" id={id} name={name} ></input>
            <label className="custom-radio" htmlFor={htmlFor}></label>
            <label htmlFor={htmlFor}>{title}</label>
        </div>
    );
};
export default CustomRadio
