import axios from "axios"
import { useState, useEffect} from "react"

//static hook with no parameter, make dynamic hook which accepts url

const useGetMovies = () => {

    const [movieList, setMovieList] = useState([])

    const fetchMovies = async () => {

        let res = await axios.get(`https://664b361fa300e8795d44a446.mockapi.io/movies/movies`)
        setMovieList(res.data)
        console.log(res.data)
    }
   
    useEffect(()=>{
        fetchMovies()
    }, [])

    return movieList;
}

export default useGetMovies;