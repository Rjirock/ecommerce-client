'use client'

import { useState } from "react";

const Input = ({ type,name,ph }) => {
    const [inputValue, setInputValue] = useState('');

    const hanldeChange= (event) => {
        const value= event.currentTarget.value
        setInputValue(value);
    }
    return(
        <input 
            type={type}
            name={name}
            placeholder={ph}
            value={inputValue}
            onChange={hanldeChange}
            className="outline-none border shadow-sm py-1 px-2 text-sm rounded-md focus:border-[] w-full"
        />
    );
}
export default Input;