import React from 'react'
import LeftArrow from './LeftArrow.png'
import RightArrow from './RightArrow.png'
import './arrows.css'

export default function Arrows({className, onClick}) {
  function prev() {
    onClick.call(null, 'prev');
  }

  function next() {
    onClick.call(null, 'next');
  }

  return (
    <div className={`arrows ${className ? className : ''}`}>
      <div className='arrow-wrapper' onClick={prev}>
        <img src={LeftArrow} alt='left'/>
      </div>
      <div className='arrow-wrapper' onClick={next}>
        <img src={RightArrow} alt='right'/>
      </div>
    </div>
  )
}