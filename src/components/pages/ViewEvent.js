import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import React from 'react'
import { render } from 'react-dom'
import { ThreeDots } from 'react-loader-spinner'
import UserContext from "../UserContext";

let event;

export default function ViewEvent () {
    const { userData, setUserData } = useContext(UserContext);
    const [loaded, setLoaded] = useState(false);
    
    const currentPath = window.location.pathname;
    useEffect(() => {
        const eventData = axios.get(`https://eventize101.herokuapp.com${currentPath}`);

        eventData.then((response) => {
            console.log(response.data);
            event = response.data;
            setLoaded(true);
        });
    
        eventData.catch((err) => {
            console.log(err);
            alert(err);
        });
      });
    
    return (
        <>{loaded ? (
        <Container>
            <h1>
                {event.title}
            </h1>
            <h2>
                host: {event.host}
            </h2>
            <h2>
                date/time: {event.dateTime}
            </h2>
            <h2>
                location: {event.location}
            </h2>
            <h3>
                description: {event.description}
            </h3>
        </Container>
        ) : <h3>loading...</h3>}
        </>
    );
}

const Container = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 8px;
    margin-right: 8px;

    h1 {
        font-weight: 900;
        font-size: 32px;
        margin-bottom: 20px;
    }

    h2 {
        margin-top: 20px;
        font-weight: 400;
        font-size: 20px;
    }

    h3 {
        margin-top: 30px;
        font-weight: 300;
        font-size: 18px;
        margin-bottom: 10px;
    }
`;