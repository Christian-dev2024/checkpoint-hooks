import React from 'react';
import CardMovie from './carteFilm';


function MovieList({movies}) {

    return(
        <div className='liste-film'>
            {movies.map ((flim)=> <CardMovie key={flim.id}   title={flim.title}  description={flim.description}  cover={flim.image}  note={flim.note}/>)}
        </div>
    )
    
};

export default MovieList ;


