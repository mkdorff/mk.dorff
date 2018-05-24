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
    const item = decodeURIComponent(qs.parse(window.location.hash).active || '');
    this.setState({
      active: item,
      showMenu: !item
    });
  }

  componentDidUpdate() {
    window.location.hash = this.state.active ? `#active=${this.state.active}` : '';
  }

  setActive = (item) => {
    this.setState({
      active: item,
      showMenu: false
    });
  }

  resetActive = () => {
    this.setState({showMenu: true}, () => {
      setTimeout(() => {
        this.setState({active: ''});
      }, 100);
    });
  }

  render() {
    const { active, showMenu } = this.state;
    return (
      <React.Fragment>
        <div className='header-menu'>
          <Header active={active} menuClosed={!showMenu}/>
          <Menu seed={Seed} showMenu={showMenu} onItemClick={this.setActive}/>
        </div>
        <Content seed={Seed} active={active}/>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();