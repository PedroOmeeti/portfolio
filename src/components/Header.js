import { Link } from 'react-router-dom'
import "./Header.css"
import { useState } from 'react'

function Header() {
  /* -------------- Mudar o Menu --------------- */
  const[Toggle, showMenu] = useState(false);

  return(
    <header className='header'>
      <nav className='nav container'>
        <Link to="/home" className='nav__logo'>Pedro</Link>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <Link to="/" className='nav__link'>
                <i className='uil uil-estate nav__icon'></i> Home
              </Link>
            </li>

            <li className='nav__item'>
              <Link to="/" className='nav__link'>
                <i className='uil uil-user nav__icon'></i> Sobre
              </Link>
            </li>

            <li className='nav__item'>
              <Link to="/" className='nav__link'>
                <i className='uil uil-file-alt nav__icon'></i> Habilidades
              </Link>
            </li>

            <li className='nav__item'>
              <Link to="/" className='nav__link'>
                <i className='uil uil-scenery nav__icon'></i> Portifólio
              </Link>
            </li>
            
          </ul>
          
          <i className='uil uil-times nav__close' 
          onClick={() => showMenu(!Toggle)}>   
          </i>
        
        </div>

        <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header