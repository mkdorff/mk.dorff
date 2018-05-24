import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import qs from 'query-string'
import registerServiceWorker from './registerServiceWorker'
import Seed from './assets/seed'
import './fonts/fonts.css'
import './index.css'

// import components
import HeaderMenu from './components/HeaderMenu'
import MainContent from './components/MainContent'


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
  
    //
    console.log(qs.stringify({active:'tetris'}))
    // can simply set hash with location.hash = '#{abovething}'
    //
  }

  render() {
    return (
      <React.Fragment>
        <HeaderMenu seed={Seed} active={this.state.active}/>
        <MainContent seed={Seed} active={this.state.active}/>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();