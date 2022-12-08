import {Input} from './input'
import styled from 'styled-components';
import { useState } from 'react';

export function Form(props:any): JSX.Element{

    const [name,setName] = useState("");
    const handler = async (e:any)=>{
        e.preventDefault();
        const {email,password} = e.target.elements
        const res = await fetch("http://localhost:8000/accounts/login",{
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email.value,
              password: password.value,
            })
        });
        const data:any=await res.json();
        if(data.messages.length){
            props.error(data.messages)
            props.onSubmit();
            props.data(data.data)
        }
        console.log(data)
    }

    const Formulario = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    `
    const Submit = styled.input`
    background: #0b7abb;
    border: none;
    box-shadow: 0px 0px 4px 1px #267df0be;
    padding: .5rem 1rem;
    border-radius: 6px;
    `
    const handleNameChange=(_name:string)=>{
        setName(_name);
    }

    return(
        <Formulario className="form" onSubmit={handler}>
            <Input type="text" name="name" change={handleNameChange} value={name}></Input>
            <Input type="email" name="email"></Input>
            <Input type="password" name="password"></Input>
            <Submit type="submit" value={"Enviar"}/>
        </Formulario>
    )
}