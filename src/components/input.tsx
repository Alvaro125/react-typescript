// import React, { useState } from "react";
import { useContext, useState } from 'react';
import styled from 'styled-components';

export function Input(props:any): JSX.Element {
    const [value,setValue] = useState("");

    const SInput = styled.input`
    background: #fafafa;
    border: none;
    box-shadow: 0px 0px 4px 1px #ffffffbf;
    padding: .5rem 1rem;
    border-radius: 6px;
    `

    const handleChange = (event:any)=>{
        setValue(event.target.value)
    }

    return (
        <SInput
            type={props.type}
            name={props.name}
            value={value}
            onChange={handleChange}
            placeholder={props.placeholder}
            pattern={props.pattern}
        />
    );
}
