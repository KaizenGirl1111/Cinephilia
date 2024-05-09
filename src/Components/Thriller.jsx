import MovieCard from './MovieCard.jsx'
import { useState } from "react"
import Navigation from './Navigation.jsx'
import GiphyEmbedWithDynamicImage from './GiphyEmbedWithDynamicImage.jsx'

function Thriller({movieList, setMovieList,cartValue,setCartValue }) { 

    {/* console.log(movieList) */ }
    const genres = ["Drama", "Thriller", "Classic", "Romance"];
 
    const filteredByGenre = movieList.filter(film => film.genre === "Thriller")

    console.log(filteredByGenre)


    return (
        <>
           

            <div style={{ paddingTop: "0.6rem" }}>
                <h1 style={{ color: "white", fontFamily: "URW Chancery L, cursive" }}>THRILLER</h1>
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

export default Thriller;