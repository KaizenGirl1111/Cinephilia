import { useState } from 'react';
import ReactPlayer from 'react-player'
function Modal({ summary, name,glimpse,genre,cast,year,director}) {
    const [closeBtn, setCloseBtn] = useState(false);

    const toggleCloseBtn = () => {
        setCloseBtn(!closeBtn);
    };

    const style1 = {
        zIndex: 2,
        width: "80vw",
        height: "80vh",
        verticalAlign: "middle",
        position: "fixed",
        transform: "translate(-50%,-50%)",
        padding: "2rem",
        left: "50%",
        top: "50%",
        backgroundColor: "black",
        color: "white",
    };

    const style2 = {
        zIndex: 1,
        backgroundColor: "rgba(0,0,0,.5)",
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
        color: "gray",
        fontSize: "1rem",
        textDecoration: "underline",
        cursor: "pointer",
    };
 
    return (
        <>
            {!closeBtn && (
                <div style={style2}>
                    <div style={style1}>
                        <ReactPlayer url={glimpse} controls={true} width="100%" style={{ borderBottom: "5px solid rgba:(0,0,0,0,5)" }} />
                        <p style={style0} onClick={toggleCloseBtn}>Close</p>
                       
                        <h3 className="movieName">{name}</h3>
                         <span>
                        <p style={{
                                color: "gray", fontFamily: "Trebuchet MS", fontSize: "0.8rem"
                            }}>{year}</p>
                            <p style={{
                                color:"white", fontFamily: "Trebuchet MS", fontSize: "0.8rem"
                            }}> Directed by: {director}</p>
                        </span>
                        <p className="summary">{summary}</p>
                        
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
