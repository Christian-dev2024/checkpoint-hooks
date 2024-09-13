import './App.css';
import MovieList from './listeFilm';
import Filter from './flitre';
import { movies as list  } from './myMovieList';
import { useEffect, useState } from 'react';


function App() {

  const [filteredList, setFilteredList] = useState([]);
  
  useEffect(()=>{
    setFilteredList(list)
  }, [])

  const onfilter = (critere) =>{
    const newList = list.filter((item)=> item.title === critere );
      if(newList.length !== 0 ){
        setFilteredList(newList)
      } else {
        setFilteredList(list)
      }
  }

  return(
    <>
    <Filter filtrer={onfilter} />
    <MovieList  movies={[...filteredList]} />
    </>
  )
}

export default App;
