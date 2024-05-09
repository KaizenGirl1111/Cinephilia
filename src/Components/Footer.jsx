


function Footer() {
    const footerStyle={
        display: "flex",
        height: "8vh",
        backgroundColor: "black"
    }
    const space = {
        padding: "1.5vh 1.8vw 0vw 1.8vw",
        color: "white",
        fontFamily: "Trebuchet MS"
    }
    return (
        <>
            <div style={footerStyle}> 
                <div style={space}>
                    ®️ All rights reserved
                </div>
               
                <div style={space}>
                    <i class="fa-brands fa-x-twitter"></i>
                
                    </div>

                <div style={space}>
                    <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div style={space}>
                    <i class="fa-brands fa-instagram"></i>
                </div>
              
           </div>
        </>
)
}

export default Footer;