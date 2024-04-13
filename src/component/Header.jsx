import './Header.css'
import React, { useState } from 'react'
import { SiCoinmarketcap} from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Header({ onSearchChange,showInput }) {

  return (
    <>
    <header>
      <nav className='navbar'>
        <ul>
          <li>
            <Link to='/' className='icon'>
              <h1>CoinMap</h1>
              <SiCoinmarketcap size={30}/>
            </Link>
          </li>
          { showInput && <>
          <li className='search-space'>
            <input className='search-bar' type="text" onChange={(e)=>onSearchChange(e.target.value)} />
            <button style={{borderRadius:"4px"}}><CiSearch size={24} /></button>
          </li>
          <li>
            <button style={{height:"2rem",width:"2rem"}}>day</button>
          </li>
          </>
          }
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header