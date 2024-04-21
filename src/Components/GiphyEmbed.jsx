import { useState } from "react";

function GiphyEmbed({ imageUrl }) { 
    console.log("GiphyEmbed",imageUrl)
    const [isHovered, setIsHovered] = useState(false);
    const windowWidth = window.innerWidth;
    return (
        <>
      
            {imageUrl != '' ? (<div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)" }}>

                <img src={imageUrl} style={{
                    gridColumn: "1/-1", width: "100%", gridRow: "2/5", height: windowWidth < 768 ? "50vh" : "75vh"
                }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} />

                <div style={{
                    gridColumn: "4/12", gridRow: "2/5", marginTop: "10%", paddingTop: (windowWidth <= 768) ? "2%" : "20%", zIndex: 1, border: windowWidth <= 768 ? "none" : "4px solid white", height: "12rem", visibility: isHovered ? "visible" : "hidden", overflow: "hidden"


                    // Media query for smaller screens
                }}>
                    {imageUrl == '/' ? <div style={{ gridColumn: 6, gridRow: 3, fontFamily: "URW Chancery L, cursive", color: "white" }}>

                        <h1 style={{
                            fontSize: windowWidth <= 768 ? "2rem" : "3rem", paddingLeft: windowWidth <= 768 ? "1%" : "6%", paddingTop: windowWidth <= 768 ? "30%" : "0% "
                        }}><i>
                                Amour de cinema<br />
                                <small style={{ fontSize: "1.5rem", overflowWrap: "break-word", paddingLeft: "50%" }}>  For the love of cinema</small></i></h1>
                    </div> : null}
                </div>
            </div>): null
          }
      
        </>
    );
}

export default GiphyEmbed;

