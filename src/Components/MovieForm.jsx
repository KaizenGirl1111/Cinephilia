import { useState } from "react"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import ThemeContext from '../utils/ThemeContext.js'
import { useContext } from 'react'
import {useNavigate } from "react-router-dom"
function MovieForm({ movieList, setMovieList }) {
    const navigate = useNavigate()
    const [theme, setTheme] = useContext(ThemeContext)
    const [formData,setFormData] = useState({
        movieName: "",
        moviePoster: "",
        movieRating: 0,
        movieSummary: "",
        movieDirector: "",
        movieYear: 0,
        movieGenre: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        const newMovie = {
            name: formData.movieName,
            poster: formData.moviePoster,
            rating: formData.movieRating,
            summary: formData.movieSummary,
            director: formData.movieDirector,
            year: formData.movieYear,
            genre: formData.movieGenre

        };
        
        console.log(newMovie)
        setMovieList([...movieList, newMovie])
        setFormData({
                movieName: "",
                moviePoster: "",
                movieRating: "",
                movieSummary: "",
                movieDirector: "",
                movieYear: "",
                movieGenre: ""})
        console.log(movieList)
        navigate("/")
    }
    const handleChange = (e) => {
        const {name, value} = e.target
      
        setFormData(
            {
                ...formData,
                [name]:value
            }
        )
    }
  
    return (
        <Box sx={{
            marginLeft: "25% !important",
            marginTop: "9%",


            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh", // To ensure the div covers the entire height of the viewport
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: "10px",
            padding: "2rem",
            backdropFilter: "blur(5px)",
            color: "white",
            width: "60vw",
            maxWidth: "600px",
        }}>
            <form onSubmit={handleSubmit}
                style={{ padding: "2rem", color: theme.DarkBtn === "Light 💡" ? "white" : "gray", backgroundColor: theme.DarkBtn === "Light 💡" ? "grey" : "black" }}>
                <div>
                    <TextField value={formData.movieName} name="movieName" id="standard-basic" label="Movie name" variant="standard" onChange={handleChange} sx={{ width: "100%" }} />
                </div>
                <div>
                    <TextField value={formData.movieRating}  id="standard-basic" name="movieRating" label="Movie rating" variant="standard" onChange={handleChange} sx={{ width: "48%", marginLeft: "1%", marginRight: "1%" }} />
                    <TextField value={formData.movieYear}  id="standard-basic" name="movieYear" label="Release year" variant="standard" onChange={handleChange} sx={{ width: "48%", marginRight: "1%" }} />

                </div>

                <div>
                    <TextField value={formData.movieGenre}  id="standard-basic" name="movieGenre" label="Movie Genre" variant="standard" onChange={handleChange} sx={{ width: "48%", marginLeft: "1%", marginRight: "1%" }} />
                    <TextField value={formData.movieDirector} id="standard-basic" name="movieDirector" label="Director" variant="standard" onChange={handleChange} sx={{ width: "48%", marginRight: "1%" }} />
                </div>
                <div> <TextField value={formData.movieSummary} id="standard-multiline-static"
                    label="Movie summary"
                    name="movieSummary"
                    placeholder="movie summary"
                    sx={{ width: "100%" }}
                    multiline
                    rows={4}
                    onChange={handleChange }
                    variant="standard"></TextField></div>
                <div>
                    <TextField value={formData.moviePoster} id="standard-basic" name="moviePoster" label="movie Poster Link" variant="standard" onChange={handleChange} sx={{ width: "100%" }} />
                </div>
                {/* <Button variant="contained" onClick={showInConsole} sx={{ width: "80%", marginTop: "1rem", padding: "0.5rem", borderRadius: "5px", cursor: "pointer", marginLeft: "8%" }}>Submit</Button> */}
                <input type="submit" value="submit"
                    style={{ width: "80%", marginTop: "1rem", padding: "0.5rem", borderRadius: "5px", cursor: "pointer", marginLeft: "8%" }} />

            </form>
        </Box>

    );
};

export default MovieForm;