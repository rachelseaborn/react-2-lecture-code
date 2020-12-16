//import React from 'react';

// function Header(){
//     return (
//         <header></header>
//     )
// }

// export default Header;

//Props must be passed in as an argument to functional components
const Header = props => {
    // console.log('Props: ', props)

    return (
        <header>
            <h1>{props.username} says {props.greeting}</h1>
            <button onClick={props.usernameFn}>Change Username</button>
        </header>
    )
}

export default Header;