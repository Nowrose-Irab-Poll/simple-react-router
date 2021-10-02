import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {userId, id, title, body} = props.post;

    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px',
        margin: '5px'
    }

    const history = useHistory();

    const handleViewPost = () => {
        
        const url  = `/post/${id}`
        history.push(url);

    }


    return (
        <div style={friendStyle}>
            <h2>{title}</h2>
            <h5>by User: {userId}</h5>
            <p>{body}</p>
            <button onClick={handleViewPost}>View Post</button>
        </div>
    );
};

export default Post;