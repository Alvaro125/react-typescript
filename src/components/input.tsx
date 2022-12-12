// import React, { useState } from "react";
import styled from 'styled-components';

export function Input(props:any): JSX.Element {

    const Input = styled.input`
    background: #fafafa;
    border: none;
    box-shadow: 0px 0px 4px 1px #ffffffbf;
    padding: .5rem 1rem;
    border-radius: 6px;
    `

    return (
        <Input
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            pattern={props.pattern}
        />
    );
}
