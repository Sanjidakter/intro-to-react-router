import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const {id,title,useId,body} = post;
    const navigate = useNavigate();

    const handleGoBack = () =>{
       navigate(-1);
    }
    return (
        <div>
            <h3>Detail about your post:{id}</h3>
            <h4>{title}</h4>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetail;