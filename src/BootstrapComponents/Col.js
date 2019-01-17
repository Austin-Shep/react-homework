import React from 'react';

const Col = (props) =>{
    return (
        <div className={`col-${props.size}`}>
            {props.children}
        </div>
    )
}

export default Col;