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

export default function CreateEvent () {
    const [title, setTitle] = useState("");
	const [host, setHost] = useState("");
	const [dateTime, setDateTime] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const { userData, setUserData } = useContext(UserContext);
    const navigate = useNavigate();

	function createEvent (event) {
		event.preventDefault();

        setLoading(true);

            const requisicao = axios.post("http://localhost:4001/create", {
                title,
                host,
                dateTime,
                location,
                description
            });

        requisicao.then((response) => {
            setUserData(response.data)
            console.log(response.data);
            navigate(`/events/${response.data}`);
        });

        requisicao.catch((err) => {
            console.log(err);
            alert(err);
        });
	}

    return (
        <>
            <Form>
                <form onSubmit={createEvent}>
                    <input type="text" placeholder="title" value={title} onChange={e => setTitle(e.target.value)} required disabled={loading}/>
                    <input type="text" placeholder="host" value={host} onChange={e => setHost(e.target.value)} required disabled={loading}/>
                    <input type="text" placeholder="date/time" value={dateTime} onChange={e => setDateTime(e.target.value)} required disabled={loading}/>
                    <input type="text" placeholder="location" value={location} onChange={e => setLocation(e.target.value)} required disabled={loading}/>
                    <input type="text" placeholder="description" value={description} onChange={e => setDescription(e.target.value)} required disabled={loading}/>
                    {loading ? <button disabled><ThreeDots color="#fff" height={'1.8rem'} width={'100%'} /></button> : <button type="submit">Create</button>}
                </form>
            </Form>
        </>
    );
}

const Form = styled.div`
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }

    input {
        border-width: 1px;
        border-color: #D4D4D4;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        width: 80vw;
        height: 52px;
        margin-bottom: 24px;
        font-family: 'Lexend Deca', sans-serif;
    }

    input:disabled{
        background: grey;
        color: darkgray;
        opacity: 0.2;
        cursor: progress;
    }

    button:disabled{
        background: grey;
        color: darkgray;
        opacity: 0.2;
        cursor: progress;
    }

    input::placeholder {
        padding-left: 11px;
        font-size: 14px;
        color: #7E7E7E;
    }

    button {
        border-style: none;
        border-radius: 5px;
        margin-bottom: 20px;
        width: 80vw;
        height: 45px;
        background-color: #232323;
        color: white;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 21px;
    }
`;