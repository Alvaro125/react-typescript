import styled from "styled-components";
import { useFetchPost } from "../hooks/fetch";
import { useEffect } from "react";

export function Register(props: any): JSX.Element {

    const [register, postRegister] = useFetchPost("http://localhost:8000/accounts/");
    useEffect(()=>{
        if (register.messages?.length) {
            props.error(register.messages);
            props.onSubmit();
        }
        console.log(register);
    },[register])
    async function handler(e: any): Promise<void> {
        e.preventDefault();
        try {
            const { email, password, name } = e.target.elements;
            if (!email.value) {
                throw new Error("Preencha o email")
            }
            if (!password.value) {
                throw new Error("Preencha a senha")
            }
            if (!name.value) {
                throw new Error("Preencha seu nome")
            }
            postRegister({
                email: email.value,
                name: name.value,
                password: password.value,
            });
        } catch (err: any) {
            props.onSubmit();
            props.error(err.message);
            console.error(err);
        }
    }

    const Formulario = styled.form`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
    `;
    const Submit = styled.input`
        background: #0b7abb;
        border: none;
        box-shadow: 0px 0px 4px 1px #267df0be;
        padding: 0.5rem 1rem;
        border-radius: 6px;
    `;
    const Input = styled.input`
    background: #fafafa;
    border: none;
    box-shadow: 0px 0px 4px 1px #ffffffbf;
    padding: .5rem 1rem;
    border-radius: 6px;
    `;
    return (
        <Formulario className="form" onSubmit={handler}>
            <Input
                type="text"
                name="name"
                placeholder="Nome"
            />
            <Input
                type="email"
                name="email"
                placeholder="Email"
            />
            <Input
                type="password"
                name="password"
                placeholder="Password"
            />
            <Submit type="submit" value={"Enviar"} />
        </Formulario>
    );
}
