import MovieCard from './MovieCard.jsx'
import { useState } from "react"
import GiphyEmbed from './GiphyEmbed.jsx'
import Navigation from './Navigation.jsx'
import GiphyEmbedWithDynamicImage from './GiphyEmbedWithDynamicImage.jsx'

function Drama({ movieList, setMovieList,cartValue,setCartValue }) {


    {/* console.log(movieList) */ }
    const genres = ["Drama", "Thriller", "Classic", "Romance"];
   
    const   filteredByGenre = movieList.filter(film => film.genre === "Drama")

    console.log(filteredByGenre)


    return (
        <>
  
            <div style={{ paddingTop: "2rem" }}>
                <h1 style={{ color: "white", fontFamily: "URW Chancery L, cursive" }}>DRAMA</h1>
            </div>
            {

                <div className="cards-container">


                    {filteredByGenre.map((element, index) => (

                        <MovieCard key={index} {...element} editBtn={<button>Edit</button>} deleteBtn={<button>Delete</button>} cartValue={cartValue} setCartValue={setCartValue} />
                    ))}
                </div>

            }

        </>
    )
}

export default Drama;