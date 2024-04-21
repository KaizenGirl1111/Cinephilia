import MovieCard from './MovieCard.jsx'
import { useState } from "react"
import {useEffect } from 'react'
import Navigation from './Navigation.jsx'
import GiphyEmbedWithDynamicImage from './GiphyEmbedWithDynamicImage.jsx'

function Romance({ movieList, setMovieList }) {
   const  [romanceArray,setRomanceArray] = useState([])

    {/* console.log(movieList) */ }
    const genres = ["Drama", "Thriller", "Classic", "Romance"];
 

    

    let filteredByGenre
     async function test() {
        filteredByGenre = movieList.filter(film => film.genre === "Romance")
        if (!filteredByGenre) {
           await setRomanceArray(filteredByGenre)
        }
        console.log(romanceArray)
        return filteredByGenre
    }

    console.log(romanceArray)
    return (
        <>
    
            <div style={{ paddingTop: "2rem" }}>
                <h1 style={{ color: "white", fontFamily: "URW Chancery L, cursive" }}>ROMANCE</h1>
            </div>
            {

                <div className="cards-container">


                    {filteredByGenre.map((element, index) => (

                        <MovieCard key={index} {...element} editBtn={<button>Edit</button>} deleteBtn={<button>Delete</button>} idNo={index} movie={romanceArray} />
                    ))}
                </div>

            }

        </>
    )
}

export default Romance;