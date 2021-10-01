import { useEffect, useState } from "react";

const Friends = () => {

    const [users, setUsers] = useState([]);

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => console.log(json));
    }, [])

    return (
        <div>
            <h2>This is Friends</h2>
        </div>
    );
};

export default Friends;