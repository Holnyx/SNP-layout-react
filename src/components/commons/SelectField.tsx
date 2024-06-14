import React, { ChangeEvent, FC, useState } from 'react';
import  Icon  from './Icon'
import { directionOptions } from '@/pages/HomePage/CreateTour/CreateTour';

type SelectFieldPropsItem = {
    title: string
    htmlFor: string
    defaultValue: string
    required?: boolean
    className: string
    name: string
    id: string
}

const SelectField: FC<SelectFieldPropsItem> = ({ title, htmlFor, defaultValue, required, className, name, id}) => {
    const [select, setSelect] = useState(true)

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelect(event.currentTarget.value === "color");
    };

    return (
        <div className="input-box">
            <label htmlFor={htmlFor}>{title}</label>
            <select defaultValue={defaultValue}  required={required} className={`${className} ${select ? 'select-placeholder' : ''}`}
                name={name} id={id} onChange={handleChange} >
                {directionOptions.map((option, i) =>
                    <option key={i} value={option.value} disabled={option.disabled} >{option.title}</option>
                )}
            </select>
            <Icon iconId={'ic-dropdown'} className='ic-dropdown' viewBox='0 0 26 26' width='26' height='26' />
        </div>
    );
};
export default SelectField