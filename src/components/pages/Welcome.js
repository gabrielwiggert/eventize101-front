import styled from "styled-components";
import { Link } from "react-router-dom";
import React from 'react'

export default function Welcome() {
    return (
        <>
        <Container>
            <h1>Events made simple</h1>
            <h2>Create a page for your event and share it with your invitees</h2>
            <h3>login-less (optional), no-app web experience</h3>
            <Button>
                <Link to="/create">
                    <button role="button">Get started</button>
                </Link>
            </Button>
        </Container>
        </>
    );
}

const Button = styled.div`
    button {
        height: '50px';
        width: '50px';
    }
`;

const Container = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
        font-weight: 900;
        font-size: 32px;
    }

    h2 {
        margin-top: 60px;
        font-weight: 400;
        font-size: 20px;
    }

    h3 {
        margin-top: 45px;
        font-weight: 300;
        font-size: 18px;
        margin-bottom: 100px;
    }

    button {
        background-color: #232323;
        border-radius: 4px;
        border-style: none;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-size: 16px;
        font-weight: 700;
        line-height: 1.5;
        margin: 0;
        max-width: none;
        min-height: 55px;
        min-width: 10px;
        outline: none;
        overflow: hidden;
        padding: 9px 20px 8px;
        position: relative;
        text-align: center;
        text-transform: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        width: 100%;
    }

    button:hover,
    button:focus {
        opacity: .75;
    }
`;