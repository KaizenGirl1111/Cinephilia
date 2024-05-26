import React from "react"
import { Field,useFormik,ErrorMessage } from "formik"
import { useState } from "react"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import ThemeContext from '../utils/ThemeContext.js'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import * as Yup from "yup" 
import axios from "axios"

const MovieForm_Formik = () => {
    const navigate = useNavigate()
   const  [theme, setTheme] = useContext(ThemeContext)
    const initialValues ={
        name: "",
        poster: "",
        rating: null,
        summary: "",
        director: "",
        year: "",
        genre: ""
    }
    
    const formSchema = Yup.object().shape({
        name: Yup.string().min(1, "Too short").required("Feilds are mandatory"),
        poster: Yup.string().min(1, "Too short").required("Feilds are mandatory"),
        rating: Yup.number().required("Feilds are mandatory"),
        summary: Yup.string().min(10, "Put greater summary").required("Feilds are mandatory"),
        director: Yup.string().min(1, "Too short").required("Feilds are mandatory"),
        year: Yup.number().required("Feilds are mandatory"),
        genre: Yup.string().max(10, "Too long,please select correct genre").required("Feilds are mandatory")
    })
    
    const formik = useFormik({
        initialValues,
        validationSchema: formSchema,
        onSubmit: (values) => {
            console.log(values)
            //setMovieList([...movieList,values])
            addMovie(values)
        }
    })
     console.log(formik)
     
    const addMovie = async (newmovie) => {
        let res = await fetch('https://664b361fa300e8795d44a446.mockapi.io/movies/movies', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newmovie)
        })
        navigate('/')
    }
    /*
    const addMovie = async (newmovie) => {
        let res = await axios.post('https://664b361fa300e8795d44a446.mockapi.io/movies/movies', newmovie)
        console.log(res)
        navigate('/')
    }
    */
    return (
        <>
            <Box>
                {/*                sx={{
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

            }}*/}
                <form onSubmit={formik.handleSubmit}>
                 
                    <div>
                        <label>Movie name: </label>
                        <input value={formik.values.name} name="name" label="Movie name" onChange={formik.handleChange} style={{ width: "60%", color: theme.DarkBtn === "Dark 🌙" ? "white" : "black" }} onBlur={formik.handleChange} />
                        <span style={{ color: "red",display:"block" }}>  {(formik.errors.name && formik.touched.name) ? formik.errors.name : null} </span>
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
                            {(formik.errors.genre && formik.touched.genre)?formik.errors.genre:null}
                      
                            <label>Director: </label>
                            <input value={formik.values.director} name="director" label="Director" onChange={formik.handleChange} style={{ width: "28%", marginRight: "1%", color: theme.DarkBtn === "Dark 🌙" ? "white" : "black" }} onBlur={formik.handleChange} />
                            {(formik.errors.director && formik.touched.director)?formik.errors.director:null }
                       
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
export default MovieForm_Formik;