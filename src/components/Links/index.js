import React from 'react'
import './links.css'

export default function Links({active}) {

  return (
    <div className='links'>
      <div className='link'>menu</div>
      <div className='link'>about</div>
      <div className='link'>resume</div>
      <div className='mobile-toggle'>
        {/* <img src='' alt=''/> */}
      </div>
      <div className='logo'>
        {/* <img src='' alt=''/> */}
      </div>
    </div>
  )
}