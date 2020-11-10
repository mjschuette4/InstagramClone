import React, { useState, useEffect } from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar"
import { db } from '../Config/Firebase';

function post({postId, username, caption, imageUrl}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        let unsubscribe;
        if(postId) {
            unsubscribe = db
                .collection("posts")
                .doc(postId)
                .collection("comments")
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => doc.data()));
                });
        }

        return () => {
            unsubscribe();
        };
    }, [postId]);
    return (
        <div className="post">
            <div className="post_header">
                <Avatar 
                    className="post_avatar"
                    alt={username}
                    src="/static/images/avatar/1.jpg"
                    />
                <h3>{username}</h3>
            </div>
            
            <img className="post_image" src={imageUrl}/>
            <h4 className="post_text"><strong>{username}</strong> {caption}</h4>
        </div>
    )
}

export default post
