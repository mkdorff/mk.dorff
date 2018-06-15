import React, { Component } from 'react'
import { isMobile } from '../../helpers/deviceView'
import './menu.css'

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: isMobile()
    }
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

  _handleItemClick = (e) => {
    this.props.onItemClick(e.target.id);
  }

  render() {
    const {seed, showMenu} = this.props;
    const {isMobile} = this.state;

    return (
      <div className={`menu ${showMenu ? '' : 'hide-menu'}`}>
        {seed.map((item, idx) => (!item.hideFromMenu &&
          <div 
            className='menu-item'
            onClick={this._handleItemClick}
            id={item.longName}
            key={idx}>
            <div className='item-text' id={item.longName}>
              {isMobile ? item.shortName : item.longName}
            </div>
          </div>
        ))}
      </div>
    )
  }
}