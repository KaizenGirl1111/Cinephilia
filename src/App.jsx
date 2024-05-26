import './App.css'

import AddMovieForm from './Components/AddMovieForm.jsx'
import AddMovieMUI from './Components/AddMovieMUI.jsx'
import { useState } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { movie } from './utils/constant.jsx'
import Page404 from './Components/Page404.jsx'
import Thriller from './Components/Thriller.jsx'
import Drama from './Components/Drama.jsx'
import Classic from './Components/Classic.jsx'
import Romance from './Components/Romance.jsx'
import Navigation from './Components/Navigation.jsx'
import GiphyEmbedWithDynamicImage from './Components/GiphyEmbedWithDynamicImage.jsx'
import MovieCardMap from './Components/MovieCardMap.jsx'
import FullInfoScreen from './Components/FullInfoScreen'
import CartContext from './utils/CartContext.js'
import ThemeContext from './utils/ThemeContext.js'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MovieForm from './Components/MovieForm.jsx'
import MovieForm_Formik from './Components/MovieForm_Formik.jsx'
import EditForm from "./Components/EditForm.jsx"
import Shimmer from './Components/Shimmer.jsx'
import { Provider } from 'react-redux'
import store from './utils/store.jsx'
import ThemeContextMUI from './utils/ThemeContextMUI.js'

function App() {
    const [movieList, setMovieList] = useState(movie)
    const [cartValue, setCartValue] = useState(0)
    const [cxtCartValue, setCxtCartValue] = useState(0)
    const [themeMUI,setThemeMUI] = useState("light")
    const darkTheme = createTheme({
      palette: {
        mode: themeMUI,
      },
    });
   const [theme, setTheme] = useState({
        light: "light",
        dark: "dark",
        DarkBtn: "Light 💡",
        status: true
    })
    const bgstyle = {
        background: theme.status == true ? "#1d1716" : "white", 
        
        width: "100%",
        zIndex:0
    }
    {/*console.log(movieList)*/}
  return (
      <>
          <Provider store={store }>
          <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <ThemeContextMUI.Provider value={[themeMUI, setThemeMUI]}>
          {/*  <ThemeContext.Provider value={[theme, setTheme]}> */}
          <CartContext.Provider value={[cxtCartValue, setCxtCartValue]}>

         {/* <div style={bgstyle}>  */}
        <div>
          <Navigation cartValue={cartValue} setCartValue={setCartValue} />
          <GiphyEmbedWithDynamicImage />
                          {/*<Shimmer/>*/}
          <Routes>
          <Route path='/thriller' element={<Thriller movieList={movieList} setMovieList={setMovieList} />} />
          <Route path='/drama' element={<Drama movieList={movieList} setMovieList={setMovieList} />} />
          <Route path='/classic' element={<Classic movieList={movieList} setMovieList={setMovieList} />} />
          <Route path='/romance' element={<Romance movieList={movieList} setMovieList={setMovieList} />} />
              <Route path='/' element={<MovieCardMap movieList={movieList} setMovieList={setMovieList} cartValue={cartValue} setCartValue={setCartValue} />} />
        
              <Route path='/addmovie' element={<AddMovieForm movieList={movieList} setMovieList={setMovieList} />} />
              <Route path='/movie/:idNo' element={<FullInfoScreen />} />
              <Route path='/404' element={<Page404 />} />
              <Route path='/addmovieMUI' element={<AddMovieMUI movieList={movieList} setMovieList={setMovieList} />} />
              <Route path='/movieform' element={<MovieForm movieList={movieList} setMovieList={setMovieList} />} />
              <Route path='/formikform' element={<MovieForm_Formik movieList={movieList} setMovieList={setMovieList} />} />
              <Route path='/editform/:idNo' element={<EditForm/> } />
              <Route path='*' element={<Navigate replace to='/404'/>}/> 
         
          </Routes>
           </div>
          </CartContext.Provider>
          {/*      </ThemeContext.Provider >  */}
          </ThemeContextMUI.Provider>
          </ThemeProvider>
      </Provider>
    </>
  )
}

export default App

