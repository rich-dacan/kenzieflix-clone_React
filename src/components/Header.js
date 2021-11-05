import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://raw.githubusercontent.com/Rich-Dacan/K-FLix/main/assets/img/logo.png" alt="logo_png "/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://avatars.githubusercontent.com/u/92825642?v=4" alt="profile picture"></img>
                </a>
            </div>
        </header>
    );
}