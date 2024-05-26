import LikeDislike from './LikeDislike.jsx'
import { useState } from 'react'
import Modal from './Modal.jsx'
import ReactDOM from 'react-dom'
import Navigation from './Navigation.jsx'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CartContext from '../utils/CartContext.js'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutlined';
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import axios from "axios"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import themeContext from "../utils/ThemeContext.js"
import themeContextMUI from "../utils/ThemeContextMUI.js"
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import { addItem } from '../utils/cartSlice.jsx'
import {useDispatch } from 'react-redux'
function MovieCard({element, name, poster, rating, summary, glimpse, director, year, cast, genre, editBtn, deleteBtn, idNo,cartValue,setCartValue}) { 
    const [cxtCartValue, setCxtCartValue] = useContext(CartContext)
    const [theme, setTheme] = useState(themeContext)
    const [themeMUI, setThemeMUI] = useContext(themeContextMUI)
   //  console.log("cxt",cxtCartValue)
    const [watchListAdded, setWatchListAdded] = useState(false)
   // console.log(idNo)
   // console.log(cartValue,setCartValue)
    const addToList = () => {
        (watchListAdded === true) ? setWatchListAdded(false) : setWatchListAdded(true)
    }
    let ratingStyle = {
        color:  rating >8?"green":"darkred",
        fontFamily:"Trebuchet MS",
        fontSize: window.innerWidth <= 500 ? "0.4rem !important" : window.innerWidth <= 900 ? "2rem" : "1rem",

    }
    let btnPadding = {
        paddingTop:"10rem"
    }
    let listBtn = {
      //  backgroundColor: "#393e46",
        fontFamily: "Trebuchet MS",
        fontSize: window.innerWidth <= 500 ? "0.4rem !important" : window.innerWidth <= 900 ? "2rem" : "0.7rem",
        color: (themeMUI == "light") ? "black" : "white" ,
        padding: "2px 2px 2px 2px",
        float: "right",
        width: "2rem",
        height:"2rem",
        borderRadius:"50%"
    }
    let sumBtn = {
       // backgroundColor: "#393e46",
        fontFamily: "Trebuchet MS",
        fontSize: window.innerWidth <= 500 ? "0.4rem !important" : window.innerWidth <= 900 ? "2rem" : "0.7rem",
        color: (themeMUI == "light") ? "black" : "white" ,
        float: "right",
        width: "1.5rem",
        height: "2rem",
        borderRadius: "50%"
        
    }
    const [summaryBtn, setSummaryBtn] = useState(false)
    const summaryFunc = () => {
        setSummaryBtn(!summaryBtn)
       
    }
    const [showModal, setShowModal] = useState(false)
    const toggleModal = () => {
        setShowModal(!showModal)
    }
    const title = {
        fontSize: window.innerWidth <= 500 ? "0.4rem !important" : window.innerWidth <= 900 ? "2rem" : "0.7rem",
    }
    const dispatch = useDispatch()
    const handleAddItem = (movie) => {
        console.log(movie)
        dispatch(addItem(movie))
    }
    const deleteMovieById = async (id) => {
        try {
            const res = await axios.delete(`https://664b361fa300e8795d44a446.mockapi.io/movies/movies/${id}`);
            console.log("Delete response:", res);

            //setMovie(null);
        } catch (error) {
            console.error("Error deleting the movie:", error);
        }
    };
    const navigate = useNavigate()
    return (
        <>
        
            <div className="movie-card">
           
                <img className="poster" alt="" src={poster} />
                <div>
                    
                    <h3 className="movieName" style={title}> {name}
                        <Button sx={listBtn} onClick={addToList}>{watchListAdded ? <DoneRoundedIcon/> : <AddCircleOutlineIcon/>}</Button></h3>
                      
                 
                    
                    <p style={ratingStyle}>⭐ {rating} </p>
                    <LikeDislike />
                    <br/>
                    <Button onClick={summaryFunc} sx={sumBtn}>{summaryBtn ? <KeyboardArrowDownIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}</Button>
                   
                    {summaryBtn && <Modal name={name} summary={summary} glimpse={glimpse} genre={genre} cast={cast} year={year} director={director} idNo={idNo} />}
                    <Box sx={{marginTop:"0.3rem"} }>
                    <Button sx={{  borderRadius: "50%", height: "2rem", width: "1em",marginRight:"0.1rem",color:(themeMUI=="light")?"black":"white" }} onClick={() => navigate(`/editform/${idNo}`)}> <EditOutlinedIcon fontSize="small" /> </Button>
                        <Button sx={{ borderRadius: "50%", height: "2rem", width: "1rem", marginRight: "0.1rem", color: (themeMUI == "light") ? "black" : "white" }} onClick={() => deleteMovieById(idNo)}><DeleteOutlineOutlinedIcon fontSize="small"  /></Button>
                        <Button sx={{ borderRadius: "50%", height: "2rem", width: "1rem", marginRight: "0.1rem", color: (themeMUI == "light") ? "black" : "white" }} onClick={() => setCxtCartValue(cxtCartValue + 1)}><ShoppingCartOutlinedIcon fontSize="small" /></Button>
                        <Button sx={{ borderRadius: "50%", height: "2rem", width: "1rem", marginRight: "0.1rem", color: (themeMUI == "light") ? "black" : "white" }} onClick={()=>handleAddItem(element) }><BookmarkAddOutlinedIcon fontSize="small"/></Button>
                    </Box>

                </div>
          
             </div>
        </>
    )
}
export default MovieCard;