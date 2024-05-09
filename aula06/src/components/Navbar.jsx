import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav>
        <Link to="/">Página Inicial</Link><br/>
        <Link to="/noticias">Noticias</Link><br/>
        <Link to="/dpo-lgpd">DpoLgpd</Link><br/>
        <Link to="/a-faculdade">Afaculdade</Link><br/>
   </nav>
  )
}

export default Navbar