import styled from "styled-components";
import { Link } from "react-router-dom";
import React from 'react'

import logo from "../assets/imgs/EVENTIZE101-LOGO.jpg";

export default function Header() {
    return (
        <Container>
            <img src={logo} />
            <h1>Hi</h1>
        </Container>
    );
}

const Container = styled.div`
    height: 100px;
    width: 100vw;
    background-color: black;
    color: white;
`;