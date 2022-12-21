import styled from "styled-components";
import { Auth } from "../components/auth";
import { useContext, useEffect, useState } from "react";
import { useFetchGet } from "../hooks/fetch";

export function Perfil(props:any): JSX.Element {
    const auth = useContext(Auth);
    let data = useFetchGet("http://localhost:8000/accounts/me");

    const Flex = styled.form`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
    `;
    return (
        <Flex>
            <p>{data?.data?.name}</p>
            <p>{data?.data?.email}</p>
        </Flex>
    );
}
