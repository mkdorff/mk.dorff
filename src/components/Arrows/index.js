import React from 'react'
import LeftArrow from './LeftArrow.png'
import RightArrow from './RightArrow.png'
import './arrows.css'

export default function Arrows({seed, showArrows, onActiveChange}) {
  return (
    <div className='arrows'>
      <div className="left-arrow">
        <img src={LeftArrow} alt="" srcset=""/>
      </div>
      <div className="right-arrow">
        <img src={RightArrow} alt="" srcset=""/>
      </div>
    </div>
  )
}