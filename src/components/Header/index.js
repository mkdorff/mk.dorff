import React, { Component } from 'react'
import './header.css'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.titleRef = React.createRef();
    this.state = { content: HiImMoho }
  }

  componentDidUpdate({content: prev}) {
    const {content} = this.props;
    const {current: titleRef} = this.titleRef; 
    if (prev !== content) {
      titleRef.classList.add('fade-title');
    } else {
      titleRef.classList.remove('fade-title');
      return;
    }

    setTimeout(() => {
      this.setState({ content: content || HiImMoho})
    }, 300)
  }

  render() {
    return (
      <div className='header'>
        <div ref={this.titleRef} className={`title ${this.props.hideTitle ? 'forced-fade': ''}`}>
          {this.state.content}
        </div>
      </div>
    )
  }
}

const HiImMoho = (
  <React.Fragment>
    <div className='hi'>Hi,</div>
    <div className='im'>I’m Mohonri</div>
  </React.Fragment>
)