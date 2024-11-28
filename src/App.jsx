import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import View from './Pages/View'
import Cart from './Pages/Cart'



function App() {


  return (
    <>

<Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/wishlist' element={<Wishlist/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/view/:id' element={<View/>}/>

  {/*Requesting invalid route,redirect to home */}
  <Route path='/*' element={<Navigate to={'/'}/>}/>


</Routes>
  <Footer/>
    </>
  )
}

export default App

