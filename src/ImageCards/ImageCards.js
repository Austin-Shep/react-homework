import React from 'react';

const ImageCards = (props) => {

    return (
        <div className="imageWrapper" style={{width: "100%", display: "flex", alignItems:"flex-start", flexWrap: "wrap"}}>
            {props.images.map(image => (
                <div className="card" key={image.id} style={props.style}>
                    <img className="card-img"  src={image.src} alt="Card cap" data-value={image.value} onClick={props.onClick} />
                </div>
            ))}
        </div>
    );
}

export default ImageCards;
