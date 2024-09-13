import React from 'react';

function CardMovie({title, description, cover, note}){
    return(
        <>
            <div className="cardMovie">
            <img className="imgCard" src={cover}/>
                <div className=" contentMovie">
                    <h2 className="titre">{title}</h2>
                    <p className="description">{description}</p>
                    <p className='note'>Note: {note}</p>
                </div>
        </div>
        </>
    )
} 

export default CardMovie;