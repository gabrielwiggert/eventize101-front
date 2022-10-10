import styled from "styled-components";
import { Link } from "react-router-dom";
import React from 'react'

export default function Welcome() {
    return (
        <>
        <Container>
            <h1>Events made simple</h1>
            <h2>Create a page for your event and share it with your invitees</h2>
            <h3>Login-less (optional), no-app web experience</h3>
            <Button>
                <Link to="/create">
                    <button>Get started</button>
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
    background-color: pink;
`;