import { useState } from 'react'
import CartContext from './contexts/CartContext';
import { Outlet } from 'react-router';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const [cartCount, setCartCount] = useState(null)

  return (
    <>
      <CartContext.Provider value={{ cartCount: cartCount, setCartCount: setCartCount }}>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </CartContext.Provider>
    </>
  )
}

export default App;
