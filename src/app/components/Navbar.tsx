import React from 'react'
import Link from 'next/link';
import  '@/app/styles/navbar.css';
// barra de navegacion
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Maestro Pokémon</div>
      <div className="navbar-links">
          <Link href="/" className="navbar-link">
            <img src="https://www.freeiconspng.com/uploads/pokeball-pokemon-ball-png-images-4.png" width="20" alt="" />
            Pokémon
          </Link>
          <Link href="/team" className="navbar-link">
            Equipo Pokémon
          </Link>
      </div>
    </nav>
  )
}

export default Navbar