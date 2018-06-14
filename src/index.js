import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import qs from 'query-string'
import registerServiceWorker from './registerServiceWorker'
import Seed from './assets/seed'
import './fonts/fonts.css'
import './index.css'

import Header from './components/Header'
import Links from './components/Links'
import Menu from './components/Menu'
import Arrows from './components/Arrows'
import Content from './components/Content'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: '',
      showMenu: true
    }
  }

  componentDidMount() {
    const itemParam = decodeURIComponent(qs.parse(window.location.hash).active || '');
    const active = Seed.filter(item => item.longName === itemParam)[0];
    this.setState({
      active: active,
      showMenu: !active
    });
  }

  componentDidUpdate() {
    window.location.hash = this.state.active ? `#active=${this.state.active.longName}` : '';
  }

  _setActive = (item) => {
    this.setState({
      active: item,
      showMenu: false
    });
  }

  _resetActive = () => {
  this.setState({showMenu: true}, () => {
      setTimeout(() => {
        this.setState({active: ''});
      }, 100);
    });
  }

  _prevActive = () => {
    const currIdx = Seed.indexOf(this.state.active);
    this.setState({
      active: Seed[currIdx > 0 ? currIdx - 1 : Seed.length - 1]
    })
  }
  
  _nextActive = () => {
    const currIdx = Seed.indexOf(this.state.active);
    this.setState({
      active: Seed[currIdx < Seed.length - 1 ? currIdx + 1 : 0]
    })
  }

  render() {
    const { active, showMenu } = this.state;
    const { _setActive, _resetActive, _prevActive, _nextActive } = this;
    return (
      <React.Fragment>
        <div className='header-menu'>
          <Header active={active && active.shortName} menuClosed={!showMenu}/>
          <Menu seed={Seed} showMenu={showMenu} onItemClick={_setActive}/>
        </div>
        <Links showMenuButton={!showMenu} menuClick={_resetActive} aboutClick={_setActive} seed={Seed} />
        <Content seed={Seed} active={active} menuOpen={showMenu} onPrev={_prevActive} onNext={_nextActive} />
        <Arrows className={`controls ${showMenu ? 'hide-controls' : ''}`} onPrev={_prevActive} onNext={_nextActive} />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();