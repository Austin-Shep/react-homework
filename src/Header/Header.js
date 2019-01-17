import React from 'react';

const Header = (props) =>{
    
    

    return (
        <nav style={{justifyContent: "center", width:"100%", height:"15%"}}>
            <h1>Click it</h1>
            <p>
            Score: {props.points}!
            </p>
            {props.points === 0 ? <p>Guess which picture has the point! guess wrong and loose all your points. </p> : <p>GAME ON</p>}
            {props.children}
        </nav>
    )
};

export default Header;