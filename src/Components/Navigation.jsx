

import { Link } from 'react-router-dom'
import { useState } from 'react'
import React, { useContext } from 'react'
import CartContext from '../utils/CartContext.js'
import ThemeContextMUI from '../utils/ThemeContextMUI.js'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
function Navigation({ cartValue, setCartValue }) {
    const [cxtCartValue, setCxtCartValue] = useContext(CartContext)
    const [themeMUI, setThemeMUI] = useContext(ThemeContextMUI)
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
        backgroundColor: "rgba(0,0,0,0)",
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
        color:  "white",
        verticalAlign: "middle",
        textDecoration: "none !important",
        pointer: "arrow"
        

    }
   
    const link = {
        textDecoration: "none",
        color: "inherit"
    }
    /*
    const styles = {
        background: theme.DarkBtn === "Light 💡" ? "#1d1716" : "white",
        color: theme.DarkBtn === "Light 💡" ? "white" : "#1d1716"
    }*/
    const styles = {
        backgroundColor: "rgba(0,0,0,0)",
        color:"white"
    }
   
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            {window.innerWidth <= 768 ?( <div style={navStyle}>
                <img src="../assets/logo.png" style={logoStyle} />
                <div style={{ fontFamily: "URW Chancery L, cursive", color: "white", fontSize: "5vh", marginTop: "1.5vh" }}><i><Link style={link} to="/">Cinephilia</Link></i></div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                MENU
                </Button>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
            
                    
                   
                        <MenuItem><Link style={link} to="/thriller">THRILLER</Link></MenuItem>
                        <MenuItem><Link style={link} to="/drama">DRAMA</Link></MenuItem>
                        <MenuItem><Link style={link} to="/romance">ROMANCE</Link></MenuItem>
                        <MenuItem><Link style={link} to="/classic">CLASSIC</Link></MenuItem>
                        <MenuItem><Link style={link} to="/addmovie">CONTRIBUTE</Link></MenuItem>
                        <MenuItem><Link style={link} to="/addmovieMUI">ADD MOVIE MUI</Link></MenuItem>
                        <MenuItem><Link style={link} to="/movieform">MOVIE FORM</Link></MenuItem>
                        <MenuItem><Link style={link} to="/formikform">FORMIK FORM</Link></MenuItem>
                        {/*    <Button variant="contained" style={styles} onClick={() => {
                        setTheme({
                            ...theme, status: !theme.status,
                            DarkBtn: theme.DarkBtn === "Light 💡" ? "Dark 🌙" : "Light 💡"
                        })
                    }}> {theme.DarkBtn}</Button> */}
                        <MenuItem><Button
                            variant="contained"
                            onClick={() => setThemeMUI(themeMUI == 'light' ? 'dark' : 'light')}
                        sx={styles}>   {themeMUI === 'light' ? 'Dark 🌙' : 'Light 💡'}</Button></MenuItem>
                   
                </Menu>
            </div>):
                <div style={navStyle}>
                    <img src="../assets/logo.png" style={logoStyle} />
                    <div style={{ fontFamily: "URW Chancery L, cursive", color: "white", fontSize: "5vh", marginTop: "1.5vh" }}><i><Link style={link} to="/">Cinephilia</Link></i></div>
                    <div style={{ marginLeft: "10rem", display: "flex", flexDirection: "row" }}>
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
                        <div style={space}>
                            🛒{cxtCartValue}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
    export default Navigation;
