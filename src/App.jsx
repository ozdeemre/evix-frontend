import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AnaSayfa from './pages/AnaSayfa'
import Koleksiyonlar from './pages/Koleksiyonlar'
import Hakkimizda from './pages/Hakkimizda'
import Iletisim from './pages/Iletisim'
import Urunler from './pages/Urunler'
import Sepet from './pages/Cart'
import Giris from './pages/Giris'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <SearchBar />
    <Routes>
      <Route path='/' element={<AnaSayfa />} />
      <Route path='/koleksiyon' element={<Koleksiyonlar />} />
      <Route path='/hakkimizda' element={<Hakkimizda />} />
      <Route path='/iletisim' element={<Iletisim />} />
      <Route path='/product/:productId' element={<Urunler />} />
      <Route path='/sepet' element={<Sepet />} />
      <Route path='/giris' element={<Giris />} />
    </Routes>
    <Footer />
    </div>
  )
}

export default App
