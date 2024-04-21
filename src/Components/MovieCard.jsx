import LikeDislike from './LikeDislike.jsx'
import { useState } from 'react'
import Modal from './Modal.jsx'
import ReactDOM from 'react-dom'


function MovieCard({ name, poster, rating, summary, glimpse, director, year, cast, genre, editBtn, deleteBtn, idNo }, props) { 
    console.log("Movie details ", props)
    const [watchListAdded, setWatchListAdded] = useState(false)
    console.log(idNo)
    const addToList = () => {
        (watchListAdded === true) ? setWatchListAdded(false) : setWatchListAdded(true)
    }
    let ratingStyle = {
        color:  rating >8?"green":"darkred",
        fontFamily:"Trebuchet MS",
        fontSize: window.innerWidth <= 500 ? "0.4rem !important" : window.innerWidth <= 900 ? "2rem" : "0.7rem",

    }
    let btnPadding = {
        paddingTop:"10rem"
    }
    let listBtn = {
        backgroundColor: "#393e46",
        fontFamily: "Trebuchet MS",
        fontSize: window.innerWidth <= 500 ? "0.4rem !important" : window.innerWidth <= 900 ? "2rem" : "0.7rem",
        color: "white",
        padding: "2px 2px 2px 2px",
        float:"right"
    }
    let sumBtn = {
        backgroundColor: "#29465B",
        fontFamily: "Trebuchet MS",
        fontSize: window.innerWidth <= 500 ? "0.4rem !important" : window.innerWidth <= 900 ? "2rem" : "0.7rem",
        color: "white",
        float: "right",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        padding:"0.3rem"
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
    return (
        <>
            <div className="movie-card">
           
                <img className="poster" alt="" src={poster} />
                <div>
                    
                    <h3 className="movieName" style={title}> {name}
                        <button style={listBtn} onClick={addToList}>{watchListAdded ? '✔️' : '➕'}</button></h3>
                      
                 
                    
                    <p style={ratingStyle}>⭐ {rating} </p>
                    <LikeDislike />
                    <button onClick={summaryFunc} style={sumBtn}>{summaryBtn ? '/\\' : '\\/'}</button>

                    {summaryBtn && <Modal name={name} summary={summary} glimpse={glimpse} genre={genre} cast={cast} year={year} director={director} idNo={idNo} />}
                    {editBtn}
                    {deleteBtn}
                    </div>
                   
             </div>
        </>
    )
}
export default MovieCard;