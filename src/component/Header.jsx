import './Header.css'
import React from 'react'
import { SiCoinmarketcap} from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <header>
      <nav className='navbar'>
        <ul>
          <li>
            <Link to='/' className='icon'>
              <h1>MetaVerse</h1>
              <SiCoinmarketcap size={30}/>
            </Link>
          </li>
          <li className='search-space'>
            <input className='search-bar' type="text" />
            <button style={{borderRadius:"4px"}}><CiSearch size={24} /></button>
          </li>
          <li>
            <button style={{height:"2rem",width:"2rem"}}>day</button>
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header