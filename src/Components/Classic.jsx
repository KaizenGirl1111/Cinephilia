import MovieCard from './MovieCard.jsx'
import { useState } from "react"
import GiphyEmbed from './GiphyEmbed.jsx'
import Navigation from './Navigation.jsx'
import GiphyEmbedWithDynamicImage from './GiphyEmbedWithDynamicImage.jsx'
import Footer from './Footer.jsx'

function Romance({ movieList, setMovieList,cartValue,setCartValue }) {


    {/* console.log(movieList) */ }
    const genres = ["Drama", "Thriller", "Classic", "Romance"];
    const filteredByGenre = movieList.filter(film => film.genre === "Classic")

    console.log(filteredByGenre)


    return (
        <>

            <div style={{ paddingTop: "0.7rem" }}>
                <h1 style={{ color: "white", fontFamily: "TURW Chancery L, cursive" }}>CLASSIC</h1>
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

export default Romance;