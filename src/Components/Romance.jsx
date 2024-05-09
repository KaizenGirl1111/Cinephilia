import MovieCard from './MovieCard.jsx'
import { useState } from "react"
import {useEffect } from 'react'
import Navigation from './Navigation.jsx'
import GiphyEmbedWithDynamicImage from './GiphyEmbedWithDynamicImage.jsx'
//import {ThemeContext } from '../utils/ThemeContext.js'
import { useContext } from 'react'
import ThemeContext from '../utils/ThemeContext.js'
function Romance({ movieList, setMovieList,cartValue,setCartValue }) {
    {/* console.log(movieList) */ }
    const genres = ["Drama", "Thriller", "Classic", "Romance"];
   // const [theme,setTheme] = useContext(ThemeContext)
   // console.log(theme)
    const [theme, setTheme] = useContext(ThemeContext)
    console.log("theme ",theme)
    const filteredByGenre = movieList.filter(film => {
        const data = film.genre === "Romance"
        return data
    })


    console.log("test")

    return (
        <>
    
            <div style={{ paddingTop: "2rem" }}>
                <h1 style={{ fontFamily: "URW Chancery L, cursive" }}>ROMANCE</h1>
            </div>
            {

                <div className="cards-container">


                    {filteredByGenre.map((element, index) => (

                        <MovieCard key={index} {...element} editBtn={<button>Edit</button>} deleteBtn={<button>Delete</button>} idNo={index} cartValue={cartValue} setCartValue={setCartValue}  />
                    ))}
                </div>

            }

        </>
    )
}

export default Romance;