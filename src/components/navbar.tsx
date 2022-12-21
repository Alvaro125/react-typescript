import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Auth } from "./auth";
import { useContext } from 'react';


export function Navbar(props:any): JSX.Element {
    const auth:string = useContext(Auth);
    const Bar = styled.nav`
    display:flex;
    flex-direction: row;
    align-items: center;
    background: #000000;
    margin: 0;
    color:white;
    height: 4rem;
    `
    const Menu = styled.ul`
    margin:0;
    display:flex;
    flex-direction: row;
    list-style: none;
    gap:1rem;

    `
    const Li = styled.li`
    color:white;
    `
    const Liperfil = styled.li`
    display: ${(props:any) => props.about ? 'block' : 'none'};
    color:white;
    `

    return (
        <Bar>
            <Menu>
                <Li><Link to="/">Login</Link></Li>
                <Li><Link to="/register">Registro</Link></Li>
                {auth && (<Li><Link to="/update">update</Link></Li>)}
                <Liperfil about={auth} ><Link to="/perfil">Perfil</Link></Liperfil>
            </Menu>
        </Bar>
    );
}
