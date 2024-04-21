
import './App.css'

import AddMovieFom from './Components/AddMovieForm.jsx'
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

function App() {
  const [movieList,setMovieList] = useState(movie)
    {/*console.log(movieList)*/}
  return (
      <>
          <Navigation />
          <GiphyEmbedWithDynamicImage />
          
          <Routes>
          <Route path='/thriller' element={<Thriller movieList={movieList} setMovieList={setMovieList} />} />
          <Route path='/drama' element={<Drama movieList={movieList} setMovieList={setMovieList} />} />
          <Route path='/classic' element={<Classic movieList={movieList} setMovieList={setMovieList} />} />
          <Route path='/romance' element={<Romance movieList={movieList} setMovieList={setMovieList} />} />
          <Route path='/' element={<MovieCardMap movieList={movieList} setMovieList={setMovieList} />} />
        
              <Route path='/addmovie' element={<AddMovieFom movieList={movieList} setMovieList={setMovieList} />} />
              <Route path='/movie/:idNo' element={<FullInfoScreen />} />
              <Route path='/404' element={<Page404 />} />
          
                <Route path='*' element={<Navigate replace to='/404'/>}/> 
         
          </Routes>
          
      
    </>
  )
}

export default App
