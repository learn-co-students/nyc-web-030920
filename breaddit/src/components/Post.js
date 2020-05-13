import React from 'react';

const Post = props => {
    // console.log(props)
    const { image, likes, title, user } = props;

    return (
        <div className="post-item">
            <div className="post-username">Posted by u/{user.username}</div>
            <h2>{title}</h2>
            <img className="post-image" src={image} alt={title}/>
            <div>Likes: {likes}</div>
        </div>
    )
}

export default Post;