import { useSelector,useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import { clearCart, removeItem } from '../utils/cartSlice';
import Box from '@mui/material/Box';
import ThemeContextMUI from '../utils/ThemeContextMUI.js'
import {useContext } from "react"
function Cart() {
    const cartItems = useSelector((store) => store.cart.items)
    const [themeMUI,setThemeMUI] = useContext(ThemeContextMUI)
    const dispatch = useDispatch()
    const handleClearItems = ()=>{
        dispatch(clearCart())
    }
    const handlePopItems = () => {
        dispatch(removeItem())
    }
    console.log(cartItems)
    return (
        <>
            <Box sx={{marginTop:"6rem",alignItems:"center"}}>
                <Button sx={{color:themeMUI=="dark"?"white":"black"}} onClick={()=>handleClearItems() }>Clear List</Button>
                <Button sx={{ color: themeMUI == "dark" ? "white" : "black" }} onClick={() => handlePopItems()}>Pop from List</Button>
            </Box>
        <div style={{ display: "flex"}}>
            {
                    cartItems.map((element => 
                        <>
                            <div className="movie-card">
                                <img className="poster" alt="" src={element.poster}/>
                                <div>
                                    <h3 className="movieName">{element.name}</h3>
                                    <p>⭐{element.rating}</p>
                                </div>
                            </div>
                        </>
                    ))
            }
            </div>
        </>
    )
}

export default Cart;