import React from 'react'
import './menu.css'

export default function Menu({seed, active}) {

  return (
    <div className='menu'>
      <div className='menu-item'>WIKIPEDIA NERL</div>
      <div className='menu-item'>TETRIS</div>
      <div className='menu-item'>YUKI DORFF</div>
      <div className='menu-item'>ETHERNET TETHERED SUBMARINE</div>
      <div className='menu-item'>HIPPO HIPPO</div>
      <div className='menu-item'>WINDO</div>
      <div className='menu-item'>SUDOKU</div>
      <div className='menu-item'>ASTEROIDS</div>
      <div className='menu-item'>MACHINE LEARNING ALGORITHM IMPLEMENTATIONS</div>
      <div className='menu-item'>MAPOVER</div>
      <div className='menu-item'>PHYSICS PROJECTS</div>
      <div className='menu-item'>RSA: JS & EMACS LISP</div>
      <div className='menu-item'>MANGA WEB SCRAPER</div>
      <div className='menu-item'>DEDUPE ICS EVENTS</div>
      <div className='menu-item'>GOOGLE MUSIC TO LASTFM SYNC</div>
      <div className='menu-item'>SPOTIFY</div>
      <div className='menu-item'>STUDENT STATS IN GOOGLE SHEETS</div>
    </div>
  )
}