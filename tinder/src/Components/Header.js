import React from 'react';
import "../CSS/Header.css"
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, useHistory } from "react-router-dom"


function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
            <IconButton onClick={() => history.replace(backButton)}>
                <ArrowBackIcon className="header__icon" fontSize="large" />
            </IconButton>
            ) : (
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>  
            )}
            <Link to="/">
            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/5/55/Overwatch_circle_logo.svg" alt="Overwatch Logo" />
            </Link>
            <Link to="/chats">
            <IconButton>
                <ForumIcon className="header__icon" fontSize="large" />
            </IconButton>
            </Link>
        </div>
    )
}

export default Header
