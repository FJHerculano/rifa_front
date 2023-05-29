import { useState } from 'react';
import { Link } from "react-router-dom";

import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

  const [clicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!clicked)
  }

  return (

    <header className={clicked ? "navbar-backdropm" : ""}>

      <nav className="border-bottom border-5 border-primary">
        <Link to='/'>
          <h2 className='text-white '>logo</h2>
        </Link>

        <div>
          <ul id="navUL" className={clicked ? "#navUL active" : "#navUL"}>

            {/* <li>
              <Link onClick={handleClick} className="LinkClass text-white nav-link fs-5  mx-2" to="/profile">Perfil</Link>
            </li> */}
            <li>
              <Link onClick={handleClick} className="LinkClass text-white nav-link fs-5  mx-2" to="/login">Entrar</Link>
            </li>
          </ul>
        </div>
        
        <div id="mobile">
          {
            <FontAwesomeIcon 
              icon={clicked ? faTimes : faBars} 
              className="fs-2" 
              onClick={handleClick}
            />
          }
        </div>

      </nav>


    </header>
   
  );
}

export default Navbar;
