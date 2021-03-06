import React from 'react'
import "../CSS/Chat.css"
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Chat({ name, massage, profilePic, timestamp }) {
    return (
        <Link to={`/chats/${name}`}>
        <div className="chat">
            <Avatar className="chat__image" alt={name} src={profilePic} />
            <div className="chat__details">
                <h2>{name}</h2>
                <p>{massage}</p>
            </div>
            <p className="chat__timestamp">{timestamp}</p>
        </div>
        </Link>
    )
}

export default Chat
