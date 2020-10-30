import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import database from "../Backend/firebase"
import "../CSS/Cards.css"


function Cards() {
    const [people, setPeople] = useState([
        // {
        //     name: "Ana",
        //     age: "60",
        //     url: "https://i.ytimg.com/vi/ZcCGKrYgr0k/maxresdefault.jpg"
        // },
        // {
        //     name: "Ashe",
        //     age: "39",
        //     url: "https://media.wired.com/photos/5bedeb205ee368750513ed53/1:1/w_675,h_675,c_limit/Ashe-Overwatch.jpg"
        // }

    ]);

    useEffect(() => {
        const unsubscribe = database.collection("people").onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
        return () => {
            unsubscribe();
        }
    }, [])
    
    return (
        <div>
            <div className="cards__cardContainer">
            {people.map(person => (
                <TinderCard className="swipe" key={person.name} preventSwipe={["up", "down"]}>
                    <div className="card" style={{ backgroundImage: `url(${person.url})` }}>
                        <h3>{person.name}, {person.age}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default Cards
