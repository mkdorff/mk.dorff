import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import qs from 'query-string'
import registerServiceWorker from './registerServiceWorker'
import Seed from './assets/seed'
import './fonts/fonts.css'
import './index.css'

import Header from './components/Header'
import Menu from './components/Menu'
import Content from './components/Content'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: ''
    }
  }

  componentDidMount() {
    this.setState({
      active: decodeURIComponent(qs.parse(window.location.hash).active || '')
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className='header-menu'>
          <Header active={this.state.active}/>
          <Menu seed={Seed} active={this.state.active}/>
        </div>
        <Content seed={Seed} active={this.state.active}/>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();