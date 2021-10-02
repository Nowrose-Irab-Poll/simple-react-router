import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams()
    const [friend, setFriend] = useState({})

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(json => setFriend(json))
    },  [])

    const history = useHistory()

    const handleGoToFriends = () => {
        history.push('/friends')
    }

    const handleGoBack = () => {
        history.goBack()
    }

    const {name, phone, website, company} = friend;
    return (
        <div>
            <h3>Friend Details of {friendId}</h3>
            <h1>Name: {name}</h1>
            <h4>Phone: {phone}</h4>
            <h2>Website: {website}</h2>
            <p>Works at {company?.name}</p>
            <button onClick={handleGoToFriends}>See All Friends</button>
            <br />
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default FriendDetail;