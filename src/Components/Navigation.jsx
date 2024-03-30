


function Navigation() {
    const navStyle = {
        position: "fixed",
        top: 0,
        display: "flex",
        flexDirection: "flex-row",
        backgroundColor: "black",
        width:"100%"
    }
    const logoStyle = {
        height: "100%",
        width: "4vw",
        marginLeft: "15vw"
       
    }
    const space = {
        padding: "0vw 10vw 0vw 10vw",
        fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
        color: "white",
        marginTop:"3vh"
    }
    return (
        <>
            <div style={navStyle}>
                <img src="../assets/logo.png" style={logoStyle} />
                <div style={{ fontFamily: "URW Chancery L, cursive", color: "white", fontSize: "5vh", marginTop: "1.5vh" }}><i>Cinephilia</i></div>
                <div style={space}>ACTION</div>
                <div style={space}>DRAMA</div>
            </div>
        </>
    )
}
    export default Navigation;
