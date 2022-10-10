import styled from "styled-components";
import { Link } from "react-router-dom";
import React from 'react'

import logo from "../assets/imgs/EVENTIZE101-LOGO.jpg";

export default function Header() {
    return (
        <Container>
            <img src={logo} />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 100vw;
    background-color: #232323;
    color: #EFEFEF;

    img {
        height: 50px;
    }
`;