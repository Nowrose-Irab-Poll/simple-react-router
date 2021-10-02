import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const Friend = (props) => {

    const {id, name, phone, website, address} = props.friend;
    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px',
        margin: '5px'
    }
    const url = `/friend/${id}`

    const history = useHistory();

    const handleVisitFriend = () => {
        history.push(`/friend/${id}`)
        console.log(history)
    }

    return (
        <div style={friendStyle}>
            <h2>I am {name}</h2>
            <p>ID: {id}</p>
            <h4>Call me: {phone}</h4>
            <h4>Visit me: {website}</h4>
            <p>Address: {address.city}</p>
            <NavLink to={url}> Visit me</NavLink>
            <br />
            <NavLink to={url}>
                <button>Visit me</button>
            </NavLink>
            <br />
            <button onClick={handleVisitFriend}>Visit me 2</button>
        </div>
    );
};

export default Friend;