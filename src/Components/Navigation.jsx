

import { Link } from 'react-router-dom'
import { useState } from 'react'
import React, { useContext } from 'react'
import CartContext from '../utils/CartContext.js'
import ThemeContext from '../utils/ThemeContext.js'
import Button from '@mui/material/Button';
function Navigation({ cartValue, setCartValue,themeMUI,setThemeMUI }) {
    const [cxtCartValue, setCxtCartValue] = useContext(CartContext)
    const [theme, setTheme] = useContext(ThemeContext)
    console.log(themeMUI,setThemeMUI)
  {//  const bgstyle = {
     //   background: theme.DarkBtn === "Light💡" ? "white" : "#1d1716",
    //    color: theme.DarkBtn === "Light 💡" ? "#1d1716" : "white",

        /* ackgroundColor:"white", */
    //    height: "800 vh",
     //   width: "100%",
     //   zIndex: 0
  //  } 
}
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
        padding: "2.5vh 0.5vw 0vw 0.5vw",
        fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
        color: "white",
        verticalAlign: "middle",
        textDecoration: "none !important",
        pointer: "arrow"
        

    }
   
    const link = {
        textDecoration: "none",
        color: "inherit"
    }
    const styles = {
        background: theme.DarkBtn === "Light 💡" ? "#1d1716" : "white",
        color: theme.DarkBtn === "Light 💡" ? "white" : "#1d1716"
    }
    return (
        <>
            <div style={navStyle}>
                <img src="../assets/logo.png" style={logoStyle} />
                <div style={{ fontFamily: "URW Chancery L, cursive", color: "white", fontSize: "5vh", marginTop: "1.5vh" }}><i><Link style={link} to="/">Cinephilia</Link></i></div>
                <div style={{marginLeft:"10rem",display:"flex",flexDirection:"row"} }>
                <div style={space}><Link style={link} to="/thriller">THRILLER</Link></div>
                <div style={space}><Link style={link} to="/drama">DRAMA</Link></div>
                <div style={space}><Link style={link} to="/romance">ROMANCE</Link></div>
                <div style={space}><Link style={link} to="/classic">CLASSIC</Link></div>
                    <div style={space}><Link style={link} to="/addmovie">CONTRIBUTE</Link></div>
                    <div style={space}><Link style={link} to="/addmovieMUI">ADD MOVIE MUI</Link></div>
                    <div style={space}><Link style={link} to="/movieform">MOVIE FORM</Link></div>
                    <div style={space}><Link style={link} to="/formikform">FORMIK FORM</Link></div>
               {/*    <Button variant="contained" style={styles} onClick={() => {
                        setTheme({
                            ...theme, status: !theme.status,
                            DarkBtn: theme.DarkBtn === "Light 💡" ? "Dark 🌙" : "Light 💡"
                        })
                    }}> {theme.DarkBtn}</Button> */}
                    <Button
                        variant="contained"
                        onClick={() => setThemeMUI(themeMUI == 'light' ? 'dark' : 'light')}
                    sx={styles}>   {themeMUI === 'light' ? 'Dark 🌙' : 'Light 💡'}</Button>
                    {/* <button style={styles} onClick={() => {
                        setTheme({
                            ...theme, status: !theme.status,
                            DarkBtn: theme.DarkBtn === "Light 💡" ? "Dark 🌙" : "Light 💡"
                        })
                    }}> { theme.DarkBtn } </button> */}
                    {/*  <div style={space}>{cartValue}🛒</div> */}
                    <div style={space }>
                        🛒{cxtCartValue}
                    </div>
                </div>
            </div>
        </>
    )
}
    export default Navigation;
