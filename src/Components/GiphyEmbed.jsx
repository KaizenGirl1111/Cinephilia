import { useState } from "react";

function GiphyEmbed() {
    const [isHovered, setIsHovered] = useState(false);
    const windowWidth = window.innerWidth;
    return (
        <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)" }}>
                <img src="https://media.giphy.com/media/Ibrd9KjYB40lxABQVF/giphy.gif?cid=790b76119oylty0mkrfzzbcpk4xaeolfd8d0jq1vtear06rm&ep=v1_gifs_search&rid=giphy.gif&ct=g" style={{
                    gridColumn: "1/-1", width: "100%", gridRow: "2/5", height: windowWidth<768?"70vh":"100vh"
                }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} />

                <div style={{
                    gridColumn: "4/12", gridRow: "2/5", marginTop: "10%", paddingTop: (windowWidth <= 768) ? "2%" : "20%", zIndex: 1, border: windowWidth <= 768 ? "none" : "4px solid white", height: "18rem", visibility: isHovered ? "visible" : "hidden", overflow:"hidden"


                    // Media query for smaller screens
                }}>
                    <div style={{ gridColumn: 6, gridRow: 3, fontFamily: "URW Chancery L, cursive", color: "white" }}>
                        <h1 style={{
                            fontSize: windowWidth <= 768 ? "2rem" : "5rem", paddingLeft: windowWidth <= 768 ? "1%" : "10%", paddingTop: windowWidth <= 768 ? "50%" :"0% "
                        }}><i>
                                Amour de cinema<br />
                                <small style={{ fontSize: "1.5rem", overflowWrap: "break-word", paddingLeft: "50%" }}>  For the love of cinema</small></i></h1>
                    </div>
                </div>
            </div>
          
      
        </>
    );
}

export default GiphyEmbed;

