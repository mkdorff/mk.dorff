import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import qs from 'query-string'
import registerServiceWorker from './registerServiceWorker'
import Seed from './assets/seed'
import './fonts/fonts.css'
import './index.css'

// Components
import Header from './components/Header'
import Links from './components/Links'
import Menu from './components/Menu'
import Arrows from './components/Arrows'
import Content from './components/Content'
import KeyboardShortcuts from './components/KeyboardShortcuts'

// Helpers
import { prevEl, nextEl } from './helpers/safeWrapArray'

class App extends Component {
  // Lifecycle
  constructor(props) {
    super(props);
    this.state = { active: '', menu: true }
  }

  componentDidMount() {
    this._setActive();
    window.addEventListener('popstate', this._setActive);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this._setActive);
  }

  // Helpers
  _setHash(itemName) {
    window.location.hash = itemName ? `#active=${encodeURIComponent(itemName)}` : ''; 
  }

  _parseHash() {
    return decodeURIComponent(qs.parse(window.location.hash).active || '');
  }

  _setActive = () => {
    const activeItem = this._parseHash();
    const active = Seed.filter(item => activeItem === item.longName)[0];
    this.setState({ active: active, menu: !active });
  }

  _arrowControl = (dir) => {
    const currIdx = Seed.indexOf(this.state.active);
    this._setHash(dir === 'next' ? nextEl(Seed, currIdx).longName : prevEl(Seed, currIdx).longName);
  }

  // Render
  render() {
    const { active = {}, menu } = this.state;
    const { _setHash, _arrowControl } = this;

    return (
      <React.Fragment>
        <div className='header-menu'>
          <Header content={active.shortName} hideTitle={true} />
          <Menu seed={Seed} showMenu={menu} onItemClick={_setHash} />
        </div>
        <Links showMenuButton={!menu} menuClick={_setHash} aboutClick={_setHash} seed={Seed} />
        <Content seed={Seed} active={active} menuOpen={menu} onArrows={_arrowControl} />
        <Arrows className={`controls ${menu ? 'hide-controls' : ''}`} onClick={_arrowControl} />
        <KeyboardShortcuts onEsc={_setHash} onArrows={_arrowControl} />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();