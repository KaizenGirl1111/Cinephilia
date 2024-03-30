import LikeDislike from './LikeDislike.jsx'
import { useState } from 'react'
function MovieCard({ name, poster, rating, summary }) {
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
        fontSize: "1rem",
        color: "white",
        padding:"5px 5px 5px 5px"
    }
    return (
        <>
            <div className="moive-card">
           
                <img className="poster" alt="" src={poster} />
                <div>
                   
                    <h3 className="movieName">{name}</h3>
                    <p style={ratingStyle}>⭐ {rating} </p>
                    <LikeDislike/>
                    <div className="summary">{summary}</div>
                    <span style={btnPadding}>📃
                        <button style={listBtn} onClick={addToList}>{watchListAdded ? 'Added' : 'Watchlist'}</button>
                    </span>
                    </div>
                   
             </div>
        </>
    )
}
export default MovieCard;