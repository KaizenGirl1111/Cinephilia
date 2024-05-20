import { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

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
        marginRight: "0.1rem", // 10px converted to rem
        marginLeft: "0.07rem", // 7px converted to rem
        fontSize: window.innerWidth <= 500 ? "0.7rem !important" : window.innerWidth <= 900 ? "2rem" : "1rem",
        fontFamily: "system-ui",
        borderRadius: "0.8rem", // 8% converted to rem
        textAlign: "center",
        padding: "0.1rem 0.3rem 0.1rem 0.3rem", // 3px 5px 3px 5px converted to rem
        backgroundColor: "#393e46", // Change to a darker green
        color: "white" // Change text color to white for contrast
    };

    const myStyle2 = {
        marginLeft: "0.05rem", // 5px converted to rem
        fontSize: window.innerWidth <= 500 ? "0.7rem !important" : window.innerWidth <= 900 ? "2rem" : "1rem",
        fontFamily: "system-ui",
        borderRadius: "0.8rem", // 8% converted to rem
        textAlign: "center",
        padding: "0.1rem 0.3rem 0.1rem 0.3rem", // 3px 5px 3px 5px converted to rem
        backgroundColor: "#393e46", // Change to a darker red
        color: "white" // Change text color to white for contrast
    };

    return (
        <>
            <br />
            <faRegThumbsUp />
            <span style={{ marginTop: "6px" }}>
             

                <button type="button" style={myStyle1} onClick={handleLike}><div style={{display:"inline"}}>{like} <ThumbUpIcon fontSize="small"/></div></button>
                <button type="button" style={myStyle2} onClick={handleDislike}><div style={{display:"inline"}}>{dislike} <ThumbDownIcon fontSize="small"/></div></button>
            </span>
        </>
    );
}

export default LikeDislike;
