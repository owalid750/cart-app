import { NavBarApp } from './components/NavBarApp'
import { Routes, Route } from 'react-router'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Products } from './pages/Products'
import { NotFound } from './pages/NotFound'
import ThemeToggle from './components/ThemeToggle'

import "./App.css"

function App() {

  return (
    <>
      <NavBarApp />
      <ThemeToggle/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
