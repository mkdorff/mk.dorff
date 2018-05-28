import React from 'react'
import './header.css'

export default function Header({active, menuClosed}) {
  return (
    <div className='header'>
      <div className={`title ${menuClosed ? 'hide' : ''}`}>
        <div className='hi'>Hi,</div>
        <div className='im'>I’m Mohonri Kachiki</div>
      </div>
      <div className={`active-title ${menuClosed ? 'show' : ''}`}>
        {active}
      </div>
    </div>
  )
}