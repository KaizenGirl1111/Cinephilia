import MovieCard from './MovieCard.jsx'
import { useState } from "react"
import GiphyEmbed from './GiphyEmbed.jsx'
import Romance from './Romance.jsx'
import Classic from './Classic.jsx'
import Thriller from './Thriller.jsx'
import Drama from './Drama.jsx'
import Navigation from './Navigation.jsx'
import GiphyEmbedWithDynamicImage from './GiphyEmbedWithDynamicImage.jsx'
import Footer from './Footer.jsx'
import { useEffect } from "react"
import axios from "axios"

function MovieCardMap({cartValue, setCartValue }) {
    const [movieList,setMovieList] = useState([])
    let url = "https://664b361fa300e8795d44a446.mockapi.io/movies/movies"

    useEffect(() => {
        console.log("Data fetch movies")
        fetchMovies()
    },[]) //initial render, has empty dependency list
    /*
    const fetchMovies = async (url) => {

        let movies = await fetch(url)
        let moviesData = await movies.json()
        console.log(moviesData)
        setMovieList(moviesData)
    }
    */
    const fetchMovies = async (url) => {
        let movies = await axios.get(url)
        console.log(movies.data)
        setMovieList(movies.data)
    }

    fetchMovies(url)

    {/* console.log(movieList) */ }
    const genres = ["Drama", "Thriller", "Classic", "Romance"];
     const filteredByGenre = [];
    

    genres.forEach(genre => {
        filteredByGenre.push(movieList.filter(film => film.genre === genre));
    });


        return (
            <>
               
                {/*  {filteredByGenre.map((genreMovies, genreIndex) => (
                    
                    <div key={genreIndex} className="cards-container">
                     
                        
                        {genreMovies.map((element, index) => (
                           
                            <MovieCard key={index} {...element} editBtn={<button>Edit</button>} deleteBtn={<button>Delete</button>}/>
                        ))}
                        </div>
                    
                ))}
            */}
              
           
                <Drama movieList={movieList} setMovieList={setMovieList} cartValue={cartValue} setCartValue={setCartValue} />
                <Thriller movieList={movieList} setMovieList={setMovieList} cartValue={cartValue} setCartValue={setCartValue} />
                <Classic movieList={movieList} setMovieList={setMovieList} cartValue={cartValue} setCartValue={setCartValue} />
                <Romance movieList={movieList} setMovieList={setMovieList} cartValue={cartValue} setCartValue={setCartValue} />
                <Footer/>
            </>
        )
    }

 export default MovieCardMap;