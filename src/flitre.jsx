import { useState } from 'react';
import './App.css';

const Filter=({filtrer})=>{

    const [critere, setCritere] = useState('')

    function submit (e){
        e.preventDefault();
        filtrer(critere)
    }
    return(
        <div className='NavBar'>
            <header>
                <p>My Films App</p>
            </header>
            <nav className='barre'>
                <a href="#">Home</a>
                <a href="#">Movies</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
            <form className='search'   onSubmit={submit} >
                <div>
                    <input type="text" placeholder="search.."  onChange={(e) => setCritere(e.target.value)} />
                </div>
                <div>
                    <button type="submit">search</button>
                </div>
                
            </form>
        </div>
    )
}

export default Filter;

