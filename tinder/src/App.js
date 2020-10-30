import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./Components/Header";
import Cards from "./Components/Cards"
import SwipeButtons from "./Components/SwipeButtons"
import Chats from "./Components/Chats"
import ChatScreen from "./Components/ChatScreen"


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Cards />
            <SwipeButtons />
          </Route>
          <Route exact path="/chats">
              <Header backButton="/" />
              <Chats />
          </Route>
          <Route path="/chats/:person">
            <Header backButton="/chats" />
            <ChatScreen />
          </Route>
          </Switch>
      </Router>

    </div>
  );
}

export default App;
