import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import "../CSS/ChatScreen.css"

function ChatScreen() {
    const [input, setInput] = useState("")
    const [massages, setMassages] = useState([
        {
            name: "Ana",
            image: "https://www.overbuff.com/assets/images/heroes/ana.png?v=aee4731",
            massage: "Ahoy matey."
        },
        {
            name: "Ana",
            image: "https://www.overbuff.com/assets/images/heroes/ana.png?v=aee4731",
            massage: "Are you scared?"
        },
        {
            massage: "What!?"
        }
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMassages([...massages, { massage: input }]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH ANA ON 10/08/20</p>
            {massages.map(massage => (
                massage.name ? (
                <div className="chatScreen__massage">
                    <Avatar className="chatScreen__image" alt={massage.name} src={massage.image} />
                    <p className="chatScreen__text">{massage.massage}</p>
                </div>
                ) : (
                <div className="chatScreen__massage">
                    <p className="chatScreen__textUser">{massage.massage}</p>
                </div>      
                )
            ))}
                <form className="chatScreen__input">
                    <input className="chatScreen__inputField" placeholder="Type a massage." type="text" value={input} onChange={e => setInput(e.target.value)} />
                    <button className="chatScreen__button" type="submit" onClick={handleSend} >SEND</button>
                </form>
        </div>
    )
}

export default ChatScreen
