import { useEffect, useState } from "react";
import Friend from "../Friend/Friend";
import './Friends.css'

const Friends = () => {

    const [users, setUsers] = useState([]);

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => setUsers(json));
    }, [])

    return (
        <div>
            <h2>I have Friends: {users.length}</h2>
            <div className='friend-container'>
                {
                    users.map(friend => <Friend key={friend.id} friend={friend}/>)
                }

            </div>
        </div>
    );
};

export default Friends;