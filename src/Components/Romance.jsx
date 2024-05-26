import MovieCard from './MovieCard.jsx'
import { useState } from "react"
import { useEffect } from 'react'
import Navigation from './Navigation.jsx'
import GiphyEmbedWithDynamicImage from './GiphyEmbedWithDynamicImage.jsx'
import Shop2Icon from '@mui/icons-material/Shop2';
//import {ThemeContext } from '../utils/ThemeContext.js'
import { useContext } from 'react'
import ThemeContext from '../utils/ThemeContext.js'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios"
import useGetMovies from "../utils/hooks/useGetMovies.js"
import useUrlGetMovies from '../utils/hooks/useUrlGetMovies.js'
import Shimmer from './Shimmer.jsx'

function Romance({ cartValue, setCartValue }) {

  //  const movieList = useGetMovies()
 //   console.log(movieList)
    const {data:movieList,error,loading } = useUrlGetMovies('https://664b361fa300e8795d44a446.mockapi.io/movies/movies')
   
   // const [movieList,setMovieList] = useState([])
    {/* console.log(movieList) */ }
    const genres = ["Drama", "Thriller", "Classic", "Romance"];
    // const [theme,setTheme] = useContext(ThemeContext)
    // console.log(theme)
   // const [theme, setTheme] = useContext(ThemeContext)
   // console.log("theme ", theme)
    const filteredByGenre = movieList.filter(film => {
        const data = film.genre == "Romance"
        return data
    })
    /*
    const fetchMovieData = async () => {
        let res = await axios.get('https://664b361fa300e8795d44a446.mockapi.io/movies/movies')
        setMovieList(res.data)
        console.log(res.data)
    }
    useEffect(() => {
        fetchMovieData()

    },[])
    */
    console.log("test")
    if (loading) return <> <Shimmer /> </>
    if (error)  return <p>Error: {error.message}</p> 
    
    return (
        <>

            <div style={{ paddingTop: "2rem" }}>
                <h1 style={{ fontFamily: "URW Chancery L, cursive" }}>ROMANCE</h1>
            </div>
            {

                <div className="cards-container">


                    {filteredByGenre.map((element, index) => (

                        <MovieCard key={index} {...element} editBtn={<button style={{ backgroundColor: "#393e46" }}><EditIcon fontSize="small" sx={{ color: "white" }} /></button>}
                            deleteBtn={<button style={{ backgroundColor: "#393e46" }}><DeleteIcon fontSize="small" sx={{ color: "white" }} /></button>} idNo={element.id} cartValue={cartValue} setCartValue={setCartValue} />
                    ))}
                </div>

            }

        </>
    )
}

export default Romance;