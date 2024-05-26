import MovieCard from './MovieCard.jsx'
import { useState } from "react"
import GiphyEmbed from './GiphyEmbed.jsx'
import Navigation from './Navigation.jsx'
import GiphyEmbedWithDynamicImage from './GiphyEmbedWithDynamicImage.jsx'
import Footer from './Footer.jsx'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from "react"
import axios from "axios"
import useGetMovies from "../utils/hooks/useGetMovies.js"
import useUrlGetMovies from "../utils/hooks/useUrlGetMovies.js"
import Shimmer from "./Shimmer.jsx"
function Classic({ cartValue,setCartValue }) {

   // const movieList = useGetMovies()
    const { data: movieList, error, loading } = useUrlGetMovies('https://664b361fa300e8795d44a446.mockapi.io/movies/movies')
    //console.log(movieList)
    //const [movieList,setMovieList] = useState([])
    {/* console.log(movieList) */ }
    const genres = ["Drama", "Thriller", "Classic", "Romance"];
    const filteredByGenre = movieList.filter(film => film.genre == "Classic")

    //console.log(filteredByGenre)
    /*
    const fetchMovieData = async () => {
        let res = await axios.get('https://664b361fa300e8795d44a446.mockapi.io/movies/movies')
        setMovieList(res.data)
        console.log(res.data)
    }
    useEffect(()=>{
        fetchMovieData()
    },[])
    */
    if (error) return <> <p>Error:{error}</p> </>
    if(loading) return  <>  <Shimmer/>  </>
    return (
        <>

            <div style={{ paddingTop: "0.7rem" }}>
                <h1 style={{ fontFamily: "TURW Chancery L, cursive" }}>CLASSIC</h1>
            </div> 
            {

                <div className="cards-container">


                    {filteredByGenre.map((element, index) => (

                        <MovieCard key={index} element={element} {...element} editBtn={<button style={{ backgroundColor: "#393e46" }}><EditIcon fontSize="small" sx={{ color: "white" }} /></button>} deleteBtn={<button style={{ backgroundColor: "#393e46" }}><DeleteIcon fontSize="small" sx={{ color: "white" }} /></button>} cartValue={cartValue} setCartValue={setCartValue} idNo={element.id} />
                    ))}
                </div>

            }
        
        </>
    )
}

export default Classic;