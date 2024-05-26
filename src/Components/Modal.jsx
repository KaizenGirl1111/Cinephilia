import { useState,useContext } from 'react';
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router-dom'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import themeContextMUI from '../utils/ThemeContextMUI.js';

function Modal({ summary, name,glimpse,genre,cast,year,director,idNo,filteredByGenre}) {
    const [closeBtn, setCloseBtn] = useState(false);
    console.log("This is id",idNo)
    const toggleCloseBtn = () => {
        setCloseBtn(!closeBtn);
    };
    const [themeMUI,setThemeMUI] = useContext(themeContextMUI)
    const style1 = {
        zIndex: 2,
        width: "80vw",
        height: "97vh",
        verticalAlign: "middle",
        position: "fixed",
        transform: "translate(-50%,-50%)",
        padding: "2rem",
        left: "50%",
        top: "50%",
        backgroundColor:(themeMUI=="light")?"white": "black",
        color: "white",
    };

    const style2 = {
        zIndex: 1,
        backgroundColor:(themeMUI=="light")?"rgba(255,255,255,0.5)": "rgba(0,0,0,.5)",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const style0 = {
        position: "absolute",
        top: "1rem",
        right: "1rem",
        //color: "gray",
        color: (themeMUI == "light") ? "black" : "lightgray",
        fontSize: "1rem",
        textDecoration: "underline",
        cursor: "pointer",
    };
     const navigate = useNavigate()
    return (
        <>
            {!closeBtn && (
                <div style={style2}>
                    <div style={style1}>
                        <ReactPlayer url={glimpse} controls={true} playing={true}  width="100%"  style={{ borderBottom: "5px solid rgba(0,0,0,0.5)" }} /> 
                    
                        <p style={style0} onClick={toggleCloseBtn}><CloseOutlinedIcon/></p>
                       
                        <h3 className="movieName">{name}</h3>
                         <span>
                        <p style={{
                                /*color: "gray",*/ color: (themeMUI == "light") ? "darkgray" : "lightgray", fontFamily: "Trebuchet MS", fontSize: "0.8rem"
                            }}>{year}</p>
                            <p style={{
                                /*color:"white",*/color: (themeMUI == "light") ? "black" : "white", fontFamily: "Trebuchet MS", fontSize: "0.8rem"
                            }}> Directed by: {director}</p>
                        </span>
                        <p className="summary" style={{ color: (themeMUI == "light") ? "black" : "white" } }>{summary}</p>
                        <button onClick={() => { navigate(`/movie/${idNo}`) }}>More details</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
