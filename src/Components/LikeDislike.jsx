import { useState } from "react";


function LikeDislike() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const windowWidth = window.innerWidth;
    const handleLike = () => {
        setLike(like + 1);
    };

    const handleDislike = () => {
        setDislike(dislike + 1);
    };

   

    const myStyle1 = {
        marginRight: "10px",
        marginLeft:"7px",
        fontSize: windowWidth<=768?"0.7rem":"0.5rem",
        fontFamily: "system-ui",
        borderRadius: "8%",
        textAlign: "center",
        padding: "3px 5px 3px 5px",
        backgroundColor: "#393e46", // Change to a darker green
        color: "white" // Change text color to white for contrast
    };

    const myStyle2 = {
        marginLeft: "5px",
        fontSize: windowWidth <= 768 ? "0.7rem" : "0.5rem",
        fontFamily: "system-ui",
        borderRadius: "8%",
        textAlign: "center",
        padding: "3px 5px 3px 5px",
        backgroundColor: "#393e46", // Change to a darker red
        color: "white" // Change text color to white for contrast
    };
    return (
        <>
            <br />
            <faRegThumbsUp />
            <span style={{ marginTop: "6px" }}>
             

                <button type="button" style={myStyle1} onClick={handleLike}>{like} Likes</button>
                <button type="button" style={myStyle2} onClick={handleDislike}>{dislike} Dislikes</button>
            </span>
        </>
    );
}

export default LikeDislike;
