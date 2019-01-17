import React from 'react';

const Body = (props) => {
    return (
        <div className="container" style={props.style}>
            {props.children}
        </div>
    )

}

export default Body;
