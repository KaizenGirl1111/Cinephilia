import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from "axios"
import { useFormik } from "formik"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"
import * as Yup from "yup"
import ThemeContext from '../utils/ThemeContext.js'
import { useContext } from 'react'
function EditForm({movie,idNo }) {


    console.log(movie)
    //console.log(movie.name) // const initialValues ={
    //
   // name: movie?.name, rating: movie?.rating, year: movie?.year, genre: movie?.genre, summary: movie?.summary, director: movie?.director, poster: movie?.poster
    // }
    const { name, rating, year, genre, summary, director, poster } = movie
    const initialValues = { name, rating, year, genre, summary, director, poster }
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log(values)
            updateMovie(values)
        }
    })
    const navigate  = useNavigate()
    console.log(formik)
    const [theme,setTheme]  = useContext(ThemeContext)

    const updateMovie = async (newmovie) => {
        let res = await axios.put(`https://664b361fa300e8795d44a446.mockapi.io/movies/movies/${idNo}`, newmovie) 
        console.log(res.data)
        navigate('/')
     
    }
    return (
        <>
            <Box>
             
                <form onSubmit={formik.handleSubmit}>

                    <div>
                        <label>Movie name: </label>
                        <input value={formik.values.name} name="name" label="Movie name" onChange={formik.handleChange} style={{ width: "60%", color: theme.DarkBtn === "Dark 🌙" ? "white" : "black" }} onBlur={formik.handleChange} />
                        <span style={{ color: "red", display: "block" }}>  {(formik.errors.name && formik.touched.name) ? formik.errors.name : null} </span>
                    </div>
                    <div>
                        <label>Rating: </label>
                        <input value={formik.values.rating} name="rating" label="Movie rating" onChange={formik.handleChange} style={{ width: "28%", marginLeft: "1%", marginRight: "1%", color: theme.DarkBtn === "Dark 🌙" ? "white" : "black" }} onBlur={formik.handleChange} />
                        {(formik.errors.rating && formik.touched.rating) ? formik.errors.rating : null}
                        <label>Release year: </label>
                        <input value={formik.values.year} name="year" label="Release year" onChange={formik.handleChange} style={{ width: "28%", marginRight: "1%", }} />
                        {(formik.errors.year && formik.touched.year) ? formik.errors.year : null}

                    </div>

                    <div>
                        <label>Genre: </label>
                        <input value={formik.values.genre} name="genre" label="Movie Genre" onChange={formik.handleChange} style={{ width: "28%", marginLeft: "1%", marginRight: "1%", color: theme.DarkBtn === "Dark 🌙" ? "white" : "black" }} onBlur={formik.handleChange} />
                        {(formik.errors.genre && formik.touched.genre) ? formik.errors.genre : null}

                        <label>Director: </label>
                        <input value={formik.values.director} name="director" label="Director" onChange={formik.handleChange} style={{ width: "28%", marginRight: "1%", color: theme.DarkBtn === "Dark 🌙" ? "white" : "black" }} onBlur={formik.handleChange} />
                        {(formik.errors.director && formik.touched.director) ? formik.errors.director : null}

                    </div>
                    <div>

                        <TextField value={formik.values.summary} id="standard-multiline-static"
                            label="Movie summary"
                            name="summary"
                            placeholder="movie summary"
                            style={{ width: "100%", color: theme.DarkBtn === "Dark 🌙" ? "white" : "black" }}
                            multiline
                            rows={4}
                            onChange={formik.handleChange}
                            onBlur={formik.handleChange}
                            variant="standard"></TextField></div>
                    <div>
                        <label>Poster: </label>
                        <input value={formik.values.poster} name="poster" label="movie Poster Link" onChange={formik.handleChange} style={{ width: "60%", color: theme.DarkBtn === "Dark 🌙" ? "white" : "black" }} onBlur={formik.handleChange} />
                    </div>
                    {/* <Button variant="contained" onClick={showInConsole} sx={{ width: "80%", marginTop: "1rem", padding: "0.5rem", borderRadius: "5px", cursor: "pointer", marginLeft: "8%" }}>Submit</Button> */}
                    <input type="submit" value="submit"
                        style={{ width: "60%", marginTop: "1rem", padding: "0.5rem", borderRadius: "5px", cursor: "pointer", marginLeft: "8%" }} />

                </form>
            </Box >
        </>
    )
}

const fetchMovieData = () => {
    const [movie, setMovie] = useState()
    console.log(movie)
    const { idNo } = useParams()
    const getMovie_Id = async () => {

        let res = await axios.get(`https://664b361fa300e8795d44a446.mockapi.io/movies/movies/${idNo}`)
        console.log(res)
        setMovie(res.data)
    }
        useEffect(() => {
            getMovie_Id()
        },[])
    
return (
        <>
            Edit Movie-{idNo}
            {
                movie ? <EditForm movie={movie} idNo={idNo} /> : null
            }

        </>
    )
}

export default fetchMovieData;