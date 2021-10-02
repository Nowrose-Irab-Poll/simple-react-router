import React, { useEffect } from 'react';
import { useState } from 'react';
import Post from '../Post/Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => setPosts(json))
    }, [])



    return (
        <div>
            <h2>This is Posts</h2>
            <h5>Total Posts: {posts.length}</h5>
            <div>

            {
                posts.map( post => <Post key={post.id} post={post}></Post>)
            }
            </div>

        </div>
    );
};

export default Posts;