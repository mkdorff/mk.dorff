import React from 'react'
import LeftArrow from './LeftArrow.png'
import RightArrow from './RightArrow.png'
import './arrows.css'

export default function Arrows({className, onPrev, onNext}) {
  return (
    <div className={`arrows ${className ? className : ''}`}>
      <div className='arrow-wrapper' onClick={onPrev}>
        <img src={LeftArrow} alt='left'/>
      </div>
      <div className='arrow-wrapper' onClick={onNext}>
        <img src={RightArrow} alt='right'/>
      </div>
    </div>
  )
}