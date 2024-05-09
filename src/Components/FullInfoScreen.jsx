import Thriller from './Thriller.jsx'
import Drama from './Drama.jsx'
import Classic from './Classic.jsx'
import Romance from './Romance.jsx'
import {Route,Routes,useParams, useLocation} from 'react-router-dom'
import Navigation from './Navigation.jsx'
import GiphyEmbedWithDynamicImage from './GiphyEmbedWithDynamicImage.jsx'
import MovieCardMap from './MovieCardMap.jsx'
import { movie } from   '../utils/constant.jsx'


function FullInfoScreen() {
    const { idNo } = useParams()
    const location = useLocation()
    const movie = location.state;

    const {name,poster,rating,summary,glimpse,trailer,director,year,cast,genre,id} = movie[idNo]
    console.log(director)
    return (
        <>
           
            <div className="cover">
                <div className="moviePoster">
                  <img src=  {poster}/>
                </div>
                <div className="movieDetails">
                    <h1 className="movieTitle">
                        <span className="titleSpan">{idNo} is</span>
                    </h1>
                    <ul className="infoList">
                        <li className="infoListItems">
                            <p className="directorPara">{director}</p>
                        </li>
                        <li className="infoListItems">
                            <p className="directorPara">{genre}</p>
                        </li>
                        <li className="infoListItems">
                            <p className="directorPara">{year}</p>
                        </li>

                    </ul>
                    <iframe className="trailerFrame" width="640" height="360" src={trailer} title="YouTube Coders are LYING to You. Here&#39;s How." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    {console.log(trailer)}
                    <div className="buttons">
                        <button className="listButton">
                            <i className="fa-solid fa-list"></i>
                        </button>
                        <button className="heartButton">
                            <i className="fa-solid fa-heart"></i>
                        </button>
                        <button className="clockButton">
                            <i className="fa-regular fa-clock"></i>
                        </button>
                    </div>

                    <div className="reactions">
                        <button className="grinHeartsButton">
                            <i class="fa-solid fa-face-grin-hearts"></i>
                        </button>
                        <button className="grinTearsButton">
                            <i class="fa-solid fa-face-grin-tears"></i>
                        </button>
                        <button className="rollingEyesButton">
                            <i class="fa-solid fa-face-rolling-eyes"></i>
                        </button>
                    </div>

                    <p className="movieSummary">{summary}</p>
                </div>
            </div>


        </>
    )
}
export default FullInfoScreen;