import ThemeContextMUI from "../utils/ThemeContextMUI";
import {useContext } from "react"
const Shimmer = () => {
    const windowWidth = window.innerWidth
    const [themeMUI,setThemeMUI] = useContext(ThemeContextMUI)
    return (
        <>
            
            <div style={{display:"flex"} }>
            {
                Array(4).fill("").map((element) => (
                 
                <div style={{
                        background: themeMUI == "light" ? "linear-gradient(120deg, rgba(227,227,227,0.6) 0%,rgba(235,237,238,0.6) 100%)" :"linear-gradient(109.6deg, rgba(34, 40, 49, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)", height: "55vh",
                     width: "23vw" , flex:"0 0 auto",
                     margin:"3.3vh 0.7rem"
                }}>
                </div>
             ))
            }
            {/*console.log(Array(10).fill(8))*/}
            </div>
        </>
    )

}
export default Shimmer;