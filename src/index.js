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
import { prevEl, nextEl } from './helpers/Array'
import { isEmpty } from './helpers/Object'

class App extends Component {
  // Lifecycle
  constructor(props) {
    super(props);
    this.state = { active: '', hideTitle: false }
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
    this.setState({ active: active });
  }

  _setTitle = hide => {
    this.setState({hideTitle: hide})
  }

  _arrowControl = dir => {
    const currIdx = Seed.indexOf(this.state.active);
    this._setHash(dir === 'next' ? nextEl(Seed, currIdx).longName : prevEl(Seed, currIdx).longName);
  }

  // Render
  render() {
    const { active = {}, hideTitle } = this.state;
    const { _setHash, _setTitle, _arrowControl } = this;

    return (
      <React.Fragment>
        <div className='header-menu'>
          <Header content={active.shortName} hideTitle={hideTitle} onClick={_setHash} />
          <Menu seed={Seed} active={active} onItemClick={_setHash} />
        </div>
        <Links hideMenu={active} linkClick={_setHash} hideTitle={_setTitle} />
        <Content seed={Seed} active={active} onArrows={_arrowControl} />
        <Arrows className={`controls ${isEmpty(active) ? 'hide-controls' : ''}`} onClick={_arrowControl} />
        <KeyboardShortcuts onEsc={_setHash} onArrows={_arrowControl} />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
fetch('https://us-central1-mkdorff-38e42.cloudfunctions.net/logVisit', { mode: 'no-cors'}).then(() => {
  console.log('visit logged :D');
})