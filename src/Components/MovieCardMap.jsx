import MovieCard from './MovieCard.jsx'
import { useState } from "react"
import GiphyEmbed from './GiphyEmbed.jsx'
import Romance from './Romance.jsx'
import Classic from './Classic.jsx'
import Thriller from './Thriller.jsx'
import Drama from './Drama.jsx'
import Navigation from './Navigation.jsx'
import GiphyEmbedWithDynamicImage from './GiphyEmbedWithDynamicImage.jsx'
function MovieCardMap({movieList,setMovieList }) {

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
                <Navigation />
           
                <Drama movieList={movieList} setMovieList={setMovieList}/>
                <Thriller movieList={movieList} setMovieList={setMovieList} />
                <Classic movieList={movieList} setMovieList={setMovieList} />
                <Romance movieList={movieList} setMovieList={setMovieList} />
            </>
        )
    }

 export default MovieCardMap;