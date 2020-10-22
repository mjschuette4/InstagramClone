import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar"

function post() {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar 
                    className="post_avatar"
                    alt="{username}"
                    src="/static/images/avatar/1.jpg"
                    />
                <h3>Username</h3>
            </div>
            
            <img className="post_image" src="https://images.unsplash.com/photo-1601306418939-19ee7ccffdf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"/>
            <h4 className="post_text"><strong>Username:</strong> caption</h4>
        </div>
    )
}

export default post
