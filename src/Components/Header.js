import React from 'react';

//functional components need to be passed props as an argument to receive them, so you need place a props parameter to make props work properly
const Header = props => {
    console.log(props)

    return (
        <header className='main-header'>
            <h1>{props.username} says {props.greeting}</h1>
            <button onClick={props.usernameFn}>Change Username</button>
            <button onClick={props.secondUsernameFn}>Change Username Again</button>
        </header>
    )
}

export default Header;