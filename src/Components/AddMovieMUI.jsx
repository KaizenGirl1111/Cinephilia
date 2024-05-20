import { useState } from "react"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import ThemeContext from '../utils/ThemeContext.js'
import {useContext } from 'react'
function AddMovieMUI({movieList,setMovieList }) {

    const [movieName, setMovieName] = useState("")
    const [movieRating, setMovieRating] = useState(0)
    const [movieYear, setMovieYear] = useState(0)
    const [movieGenre, setMovieGenre] = useState("")
    const [movieSummary, setMovieSummary] = useState("")
    const [movieDirector, setMovieDirector] = useState("")
    const [moviePoster, setMoviePoster] = useState("")
    const [theme, setTheme] = useContext(ThemeContext)
    const showInConsole = () => {
        const newMovie = {
            name: movieName,
            poster: moviePoster,
            rating: movieRating,
            summary: movieSummary,
            director: movieDirector,
            year: movieYear,
            genre: movieGenre

        };
        console.log(movieList)
        setMovieList([...movieList, newMovie])
        console.log(movieList)
    }
    return (
        <Box sx={{
            marginLeft: "25% !important",
            marginTop:"9%",
          
            
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
            <div style={{ padding: "2rem", color: theme.DarkBtn === "Light 💡" ? "white" : "#1d1716", backgroundColor: theme.DarkBtn === "Light 💡" ? "grey" : "black" } }>
            <div>
                <TextField id="standard-basic" label="Movie name" variant="standard" onChange={(e) => { setMovieName(e.target.value) }} sx={{width:"100%"}} />
            </div>
            <div>
                <TextField id="standard-basic" label="Movie rating" variant="standard" onChange={(e) => { setMovieRating(e.target.value) }} sx={{ width: "48%" ,marginLeft:"1%",marginRight:"1%"}}  />
                <TextField id="standard-basic" label="Release year" variant="standard" onChange={(e) => { setMovieYear(e.target.value) }} sx={{ width: "48%", marginRight: "1%" }} />
                
            </div>

            <div>
                <TextField id="standard-basic" label="Movie Genre" variant="standard" onChange={(e) => { setMovieGenre(e.target.value) }} sx={{ width: "48%", marginLeft: "1%", marginRight: "1%" }} />
                <TextField id="standard-basic" label="Director" variant="standard" onChange={(e) => { setMovieDirector(e.target.value) }} sx={{ width: "48%", marginRight: "1%" }} />           
            </div>
            <div> <TextField id="standard-multiline-static"
                label="Movie summary"
                placeholder="movie summary"
                sx={{width:"100%"} }
                multiline
                rows={4}
                
                    variant="standard"></TextField></div>
                <div>
                    <TextField id="standard-basic" label="movie Poster Link" variant="standard" onChange={(e) => { setMoviePoster(e.target.value) }} sx={{ width: "100%" }} />
                </div>
                <Button variant="contained" onClick={showInConsole} sx={{ width: "80%", marginTop:"1rem",padding: "0.5rem", borderRadius: "5px", cursor: "pointer",marginLeft:"8%"} }>Submit</Button>
            </div>
        </Box>      
       
    );
};

export default AddMovieMUI;