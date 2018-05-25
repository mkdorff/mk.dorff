import React, { Component } from 'react'
import './menu.css'

export default class Menu extends Component {
  handleClick = (e) => {
    this.props.onItemClick(e.target.innerText);
  }

  render() {
    const {seed, showMenu} = this.props;

    return (
      <div className='menu'>
        {seed.map((item, idx) => (
          <div 
            className='menu-item' 
            onClick={this.handleClick} 
            key={idx}>
            <div className='item-text'>
              {item.longName}
            </div>
          </div>
        ))}
      </div>
    )
  }
}