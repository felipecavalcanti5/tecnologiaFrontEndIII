import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Afaculdade from './pages/Afaculdade'
import Noticias from './pages/Noticias'
import DpoLgpd from './pages/DpoLgpd'
import Inicial from './pages/Inicial'
import Navbar from './components/Navbar'


const App = () => {
  return (
<>
<BrowserRouter>
<img src='uniesp.png'/>
<Navbar/>
<h1>Título da Página</h1>
<Routes>
  <Route path="/" element={<Inicial />} />
  <Route path="/a-faculdade" element={<Afaculdade />} />
  <Route path="/noticias" element={<Noticias />} />
  <Route path="/dpo-Lgpd" element={<DpoLgpd />} />
</Routes>
</BrowserRouter>
</>

  )
}

export default App