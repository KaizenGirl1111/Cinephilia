import LikeDislike from './LikeDislike.jsx'
import { useState } from 'react'
import Modal from './Modal'; // Import your Modal component
import ReactDOM from 'react-dom'


function MovieCard({ name, poster, rating, summary,glimpse,director,year,cast,genre}) {
    const [watchListAdded, setWatchListAdded] = useState(false)
    const addToList = () => {
        (watchListAdded === true) ? setWatchListAdded(false) : setWatchListAdded(true)
    }
    let ratingStyle = {
        color:  rating >8?"green":"darkred",
        fontFamily:"Trebuchet MS",
        fontSize: "15px"

    }
    let btnPadding = {
        paddingTop:"10rem"
    }
    let listBtn = {
        backgroundColor: "#393e46",
        fontFamily: "Trebuchet MS",
        fontSize: "0.6rem",
        color: "white",
        padding: "2px 2px 2px 2px",
        float:"right"
    }
    let sumBtn = {
        backgroundColor: "#29465B",
        fontFamily: "Trebuchet MS",
        fontSize: "0.6rem",
        color: "white",
        float: "right",
        borderRadius: "35%",
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
    return (
        <>
            <div className="movie-card">
           
                <img className="poster" alt="" src={poster} />
                <div>
                    
                        <h3 className="movieName">{name}
                        <button style={listBtn} onClick={addToList}>{watchListAdded ? '✔️' : '➕'}</button></h3>
                      
                 
                    
                    <p style={ratingStyle}>⭐ {rating} </p>
                    <LikeDislike />
                    <button onClick={summaryFunc} style={sumBtn}>{summaryBtn ? '/\\' : '\\/'}</button>

                    {summaryBtn && <Modal name={name} summary={summary} glimpse={glimpse} director={director} year={year} cast={cast} genre={genre} />}
                    
                    </div>
                   
             </div>
        </>
    )
}
export default MovieCard;