import Thriller from './Thriller.jsx'
import Drama from './Drama.jsx'
import Classic from './Classic.jsx'
import Romance from './Romance.jsx'
import {Route,Routes,useParams } from 'react-router-dom'
import Navigation from './Navigation.jsx'
import GiphyEmbedWithDynamicImage from './GiphyEmbedWithDynamicImage.jsx'
import MovieCardMap from './MovieCardMap.jsx'
import { movie } from   '../utils/constant.jsx'


function FullInfoScreen() {
    const { idNo } = useParams()
    console.log(idNo)
    console.log(movie[idNo])
    const {name,poster,rating,summary,glimpse,trailer,director,year,cast,genre,id} = movie[idNo]
    console.log(director)
    return (
        <>
           
            <div className="cover">
                {/*    <img className="moviePoster" src= />  */}
                <div className="movieDetails">
                    <h1 className="movieTitle">    <span style={{color:"white"} }> {idNo} is</span></h1>
                    <ul className="infoList">
                        <li className="infoListItems">    <p style={{ color: "white" }} >{director}</p>  </li> 
                        <li className="infoListItems">  <p></p> </li>
                        <li className="infoListItems">  <p></p> </li> 
                    </ul>
                    <iframe width="640" height="360" src={trailer} title="YouTube Coders are LYING to You. Here&#39;s How." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    {console.log(trailer) }
                    <span>
                       <button>
                            <i class="fa-solid fa-list"></i>
                        </button>
                        <button>
                            <i class="fa-solid fa-heart"></i>
                        </button>
                        <button>
                            <i class="fa-regular fa-clock"></i>
                        </button>
                    </span>

                    <span>
                        <button>
                            <i class="fa-solid fa-face-grin-hearts"></i>
                        </button>
                        <button>
                            <i class="fa-solid fa-face-grin-tears"></i>
                        </button>
                        <button>
                            <i class="fa-solid fa-face-rolling-eyes"></i>
                        </button>
                    </span>

                    <p className="movieSummary"></p>
                </div>
            </div>
         

        </>
    )
}
export default FullInfoScreen;