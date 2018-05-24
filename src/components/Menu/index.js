import React, { Component } from 'react'
import './menu.css'

export default class Menu extends Component {
  handleClick = (e) => {
    this.props.onItemClick(e.target.innerText);
  }

  render() {
    const {seed, active} = this.props;

    return (
      <div className='menu'>
        <div className='menu-item' onClick={this.handleClick}>WIKIPEDIA NERL</div>
        <div className='menu-item' onClick={this.handleClick}>TETRIS</div>
        <div className='menu-item' onClick={this.handleClick}>YUKI DORFF</div>
        <div className='menu-item' onClick={this.handleClick}>ETHERNET TETHERED SUBMARINE</div>
        <div className='menu-item' onClick={this.handleClick}>HIPPO HIPPO</div>
        <div className='menu-item' onClick={this.handleClick}>WINDO</div>
        <div className='menu-item' onClick={this.handleClick}>SUDOKU</div>
        <div className='menu-item' onClick={this.handleClick}>ASTEROIDS</div>
        <div className='menu-item' onClick={this.handleClick}>MACHINE LEARNING ALGORITHM IMPLEMENTATIONS</div>
        <div className='menu-item' onClick={this.handleClick}>MAPOVER</div>
        <div className='menu-item' onClick={this.handleClick}>PHYSICS PROJECTS</div>
        <div className='menu-item' onClick={this.handleClick}>RSA: JS & EMACS LISP</div>
        <div className='menu-item' onClick={this.handleClick}>MANGA WEB SCRAPER</div>
        <div className='menu-item' onClick={this.handleClick}>DEDUPE ICS EVENTS</div>
        <div className='menu-item' onClick={this.handleClick}>GOOGLE MUSIC TO LASTFM SYNC</div>
        <div className='menu-item' onClick={this.handleClick}>SPOTIFY</div>
        <div className='menu-item' onClick={this.handleClick}>STUDENT STATS IN GOOGLE SHEETS</div>
      </div>
    )
  }
}