import React, { Component } from 'react'
import './links.css'

// Images
import Logo from '../../assets/Global/logo.png'
import Menu from '../../assets/Global/menu.png'
import Close from '../../assets/Global/close.png'
import Resume from '../../assets/Global/Mohonri Resume.pdf'

// Helpers
import { isEmpty } from '../../helpers/Object'

export default class Links extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false }
  }

  _handleMenu = e => {
    const open = e.target.id === 'open';
    this.props.hideTitle.call(null, open);
    this.setState({menuOpen: open})
  }

  _handleClick = e => {
    this.props.linkClick.call(null, e.target.id === 'about' ? 'About' : '');
  }

  render() {
    const { _handleMenu, _handleClick} = this;

    return (
      <div className='links'>
        <div className={`left ${this.state.menuOpen ? 'show-links' : ''}`}>
          <div className={`link ${isEmpty(this.props.hideMenu) ? 'hide-menu' : ''}`} onClick={_handleClick} id='menu'>menu</div>
          <div className='link' onClick={_handleClick} id='about'>about</div>
          <div className='link'><a href={Resume} target='_blank'>resume</a></div>
        </div>
        <div className='right'>
          <div className='mobile-toggle'>
            {this.state.menuOpen ? 
              <img src={Close} alt='menu close' onClick={_handleMenu} id='close' /> :
              <img src={Menu} alt='menu open' onClick={_handleMenu} id='open' />
            }
          </div>
          <div className='logo-wrapper' onClick={_handleClick} id='logo'>
            <img src={Logo} alt='Logo'/>
          </div>
        </div>
      </div>
    )
  }
}