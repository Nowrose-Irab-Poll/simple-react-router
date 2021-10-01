import React from 'react';

const Friend = (props) => {

    const {name, phone, website, address} = props.friend;
    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px',
        margin: '5px'
    }
    return (
        <div style={friendStyle}>
            <h2>I am {name}</h2>
            <h4>Call me: {phone}</h4>
            <h4>Visit me: {website}</h4>
            <p>Address: {address.city}</p>
        </div>
    );
};

export default Friend;