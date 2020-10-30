import React from 'react'
import Chat from "./Chat"
import "../CSS/Chats.css"

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Ana"
                massage="Ahoy, matey!"
                timestamp="35 minutes ago"
                profilePic="https://www.overbuff.com/assets/images/heroes/ana.png?v=aee4731"
            />
            <Chat
                name="Ashe"
                massage="My name's Ashe, we're playing by my rules now."
                timestamp="45 minutes ago"
                profilePic="https://www.overbuff.com/assets/images/heroes/ashe.png?v=aee4731"
            />
        </div>
    )
}

export default Chats
