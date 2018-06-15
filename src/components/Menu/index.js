import React, { Component } from 'react'
import { isMobile } from '../../helpers/deviceView'
import './menu.css'

import { isEmpty } from '../../helpers/Object'

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { isMobile: isMobile() }
  }

  componentDidMount() {
    window.addEventListener('resize', this._handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleResize);
  }

  _handleResize = () => {
    this.setState({ isMobile: isMobile() });
  }

  _handleItemClick = e => {
    this.props.onItemClick(e.target.id);
  }

  render() {
    return (
      <div className={`menu ${isEmpty(this.props.active) ? '' : 'hide-menu'}`}>
        {this.props.seed.map((item, idx) => (!item.hideFromMenu &&
          <div 
            className='menu-item'
            onClick={this._handleItemClick}
            id={item.longName}
            key={idx}>
            <div className='item-text' id={item.longName}>
              {this.state.isMobile ? item.shortName : item.longName}
            </div>
          </div>
        ))}
      </div>
    )
  }
}