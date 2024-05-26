import axios from "axios"
import { useState, useEffect } from "react"

const useUrlGetMovies = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const fetchMovies = async () => {
        try {
            let res = await axios.get(url)
            console.log(res.data)
            setData(res.data)
        }
        catch (error) {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchMovies()
    },[url])
    return {data, error, loading}
}

export default useUrlGetMovies;

//hook returns 3 things -> data, error , loading.