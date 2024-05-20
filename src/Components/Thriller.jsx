import MovieCard from './MovieCard.jsx'
import { useState } from "react"
import Navigation from './Navigation.jsx'
import GiphyEmbedWithDynamicImage from './GiphyEmbedWithDynamicImage.jsx'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
function Thriller({ movieList, setMovieList, cartValue, setCartValue }) {

    {/* console.log(movieList) */ }
    const genres = ["Drama", "Thriller", "Classic", "Romance"];

    const filteredByGenre = movieList.filter(film => film.genre == "Thriller")

    console.log(filteredByGenre)


    return (
        <>


            <div style={{ paddingTop: "0.6rem" }}>
                <h1 style={{ fontFamily: "URW Chancery L, cursive" }}>THRILLER</h1>
            </div>
            {

                <div className="cards-container">


                    {filteredByGenre.map((element, index) => (

                        <MovieCard key={index} {...element} editBtn={<button style={{ backgroundColor: "#393e46" }}><EditIcon fontSize="small" sx={{ color: "white" }} /></button>} deleteBtn={<button style={{ backgroundColor: "#393e46" }} ><DeleteIcon fontSize="small" /></button>} cartValue={cartValue} setCartValue={setCartValue} />
                    ))}
                </div>

            }

        </>
    )
}

export default Thriller;