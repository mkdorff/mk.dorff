import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Seed from './assets/seed'
import './fonts/fonts.css'
import './index.css'

// import components
import HeaderMenu from './components/HeaderMenu'
import MainContent from './components/MainContent'


const App = () => (
  <React.Fragment>
    <HeaderMenu />
    <MainContent />
  </React.Fragment>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();