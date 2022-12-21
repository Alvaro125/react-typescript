import styled from "styled-components";
import { useEffect } from "react";
import { useFetchPost } from "../hooks/fetch";

export function Login(props: any): JSX.Element {
    const [login, loginPost] = useFetchPost("http://localhost:8000/accounts/login");
    useEffect(()=>{
        if (login.messages?.length) {
            props.error(login.messages);
            props.onSubmit();
        }
        props.data(login.data);
        console.dir(login);
    },[login, props])
    async function handler(e: any): Promise<void> {
        e.preventDefault();
        try {
            const { email, password } = e.target.elements;
            loginPost({
                email: email.value,
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
