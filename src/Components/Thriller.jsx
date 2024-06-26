import MovieCard from './MovieCard.jsx'
import { useState,useEffect} from "react"
import Navigation from './Navigation.jsx'
import GiphyEmbedWithDynamicImage from './GiphyEmbedWithDynamicImage.jsx'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios"
import useGetMovies from "../utils/hooks/useGetMovies.js"
import useUrlGetMovies from "../utils/hooks/useUrlGetMovies.js"
import Shimmer from './Shimmer.jsx';
function Thriller({ cartValue, setCartValue }) {

    //const movieList = useGetMovies()
   // console.log(movieList)
    const { data: movieList, error, loading } = useUrlGetMovies('https://664b361fa300e8795d44a446.mockapi.io/movies/movies')
    {/* console.log(movieList) */ }
    const genres = ["Drama", "Thriller", "Classic", "Romance"];
   // const [movieList,setMovieList] = useState([])
    const filteredByGenre = movieList.filter(film => film.genre == "Thriller")

   // console.log(filteredByGenre)

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
    if (error) return <>Error: {error}</>
    if(loading) return <><Shimmer/></>
    return (
        <>


            <div style={{ paddingTop: "0.6rem" }}>
                <h1 style={{ fontFamily: "URW Chancery L, cursive" }}>THRILLER</h1>
            </div>
            {

                <div className="cards-container">


                    {filteredByGenre.map((element, index) => (

                        <MovieCard key={index} element={element} {...element} editBtn={<button style={{ backgroundColor: "#393e46" }}><EditIcon fontSize="small" sx={{ color: "white" }} /></button>} deleteBtn={<button style={{ backgroundColor: "#393e46" }} ><DeleteIcon fontSize="small" /></button>} cartValue={cartValue} setCartValue={setCartValue} idNo={element.id} />
                    ))}
                </div>

            }

        </>
    )
}

export default Thriller;