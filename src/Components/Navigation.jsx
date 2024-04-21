
import { Link } from 'react-router-dom'

function Navigation() {
    const navStyle = {
        position: "fixed",
        top: 0,
        display: "flex",
        flexDirection: "flex-row",
        backgroundColor: "black",
        width: "100%",
        verticalAlign: "middle"
    }
    const logoStyle = {
        height: "100%",
        width: "4vw"
      /*marginLeft: "15vw"*/
       
    }
    const space = {
        padding: "2.5vh 2.5vw 0vw 2.5vw",
        fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
        color: "white",
        verticalAlign: "middle",
        textDecoration: "none !important",
        pointer: "arrow"
        

    }
   
    const link = {
        textDecoration: "none",
        color:"inherit"
    }
    return (
        <>
            <div style={navStyle}>
                <img src="../assets/logo.png" style={logoStyle} />
                <div style={{ fontFamily: "URW Chancery L, cursive", color: "white", fontSize: "5vh", marginTop: "1.5vh" }}><i>Cinephilia</i></div>
                <div style={{marginLeft:"24rem",display:"flex",flexDirection:"row"} }>
                <div style={space}><Link style={link} to="/thriller">THRILLER</Link></div>
                <div style={space}><Link style={link} to="/drama">DRAMA</Link></div>
                <div style={space}><Link style={link} to="/romance">ROMANCE</Link></div>
                <div style={space}><Link style={link} to="/classic">CLASSIC</Link></div>
                <div style={space}><Link style={link} to="/addmovie">CONTRIBUTE</Link></div>
                </div>
            </div>
        </>
    )
}
    export default Navigation;
