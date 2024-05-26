import { useState,useContext} from "react";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import themeContextMUI from "../utils/ThemeContextMUI.js"
function LikeDislike() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const [themeMUI,setThemeMUI] = useContext(themeContextMUI)
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
        fontSize: window.innerWidth <= 500 ? "0.7rem !important" : window.innerWidth <= 900 ? "2rem" : "0.8rem",
        fontFamily: "system-ui",
        borderRadius: "0.8rem", // 8% converted to rem
        textAlign: "center",
        padding: "0.1rem 0.3rem 0.1rem 0.3rem", // 3px 5px 3px 5px converted to rem
        //backgroundColor: "#393e46", // Change to a darker green
        color: (themeMUI == "light") ? "black" : "white", // Change text color to white for contrast
        borderColor: "gray",
        borderWidth:"thin"
    };

    const myStyle2 = {
        marginLeft: "0.05rem", // 5px converted to rem
        fontSize: window.innerWidth <= 500 ? "0.7rem !important" : window.innerWidth <= 900 ? "2rem" : "0.8rem",
        fontFamily: "system-ui",
        borderRadius: "0.8rem", // 8% converted to rem
        textAlign: "center",
        padding: "0.1rem 0.3rem 0.1rem 0.3rem", // 3px 5px 3px 5px converted to rem
       // backgroundColor: "#393e46", // Change to a darker red
        color: (themeMUI == "light") ? "black" : "white", // Change text color to white for contrast
        borderColor: "gray",
        borderWidth:"thin"
    };

    return (
        <>
            <span style={{ marginTop: "1px",marginBottom:"5px" }}>
             
                <ButtonGroup variant="outlined" aria-label="Basic button group" sx={{borderWidth:"0.5px"} }>
                    <Button sx={myStyle1} onClick={handleLike}><div style={{ display: "inline" }}>{like} | Likes </div></Button>
                    <Button sx={myStyle2} onClick={handleDislike}><div style={{ display: "inline" }}>{dislike} | Dislikes </div></Button>
                </ButtonGroup>
            </span>
        </>
    );
}

export default LikeDislike;
