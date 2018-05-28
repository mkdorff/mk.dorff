import React, { Component } from 'react'
import './links.css'

import Logo from '../../assets/Global/logo.png'
import Menu from '../../assets/Global/menu.png'
import Close from '../../assets/Global/close.png'
import Resume from '../../assets/Global/Mohonri Resume.pdf'

export default class Links extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    return props.showMenuButton ? {menuOpen:false} : null;
  }

  _handleMenuClick = () => {
    this.setState({menuOpen: false});
    this.props.menuClick();
  }

  _handleAboutClick = () => {
    this.props.aboutClick(this.props.seed.filter(item => item.longName === "About")[0]);
  }

  _openMenu = () => {
    this.setState({menuOpen: true})
  }

  _closeMenu = () => {
    this.setState({menuOpen: false})
  }

  render() {
    const {showMenuButton} = this.props;
    const {menuOpen} = this.state;

    return (
      <React.Fragment>
        <div className={`backdrop ${menuOpen ? 'hide-behind' : ''}`}></div>
        <div className='links'>
          <div className={`left ${menuOpen ? 'show-links' : ''}`}>
            {showMenuButton && <div className='link' onClick={this._handleMenuClick}>menu</div>}
            <div className='link' onClick={this._handleAboutClick}>about</div>
            <div className='link'>
              <a href={Resume} target='_blank'>resume</a>
            </div>
          </div>
          <div className='right'>
            <div className='mobile-toggle'>
              {/* --Animations-- */}
              {menuOpen ? 
                <img src={Close} alt='menu close' onClick={this._closeMenu}/> :
                <img src={Menu} alt='menu open' onClick={this._openMenu}/>
              }
            </div>
            <div className='logo-wrapper' onClick={this._handleMenuClick}>
              <img src={Logo} alt='Logo'/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}