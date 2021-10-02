import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const PostDetails = () => {

    const [post, setPost] = useState({});

    const params = useParams();

    const url = `https://jsonplaceholder.typicode.com/posts/${params.postId}`

    useEffect( ()=>{
        fetch(url)
        .then(res => res.json())
        .then(json => setPost(json))
    }, [])

    const {userId, id, body, title} = post;

    return (
        <div>
            <h5>Post ID: {id}</h5>
            <h1>{title}</h1>
            <h5>by User: {userId}</h5>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;