import React, { Component } from 'react'
import Arrows from '../Arrows'
import './content.css'

import { isEmpty } from '../../helpers/Object'

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.contentRef = React.createRef();
  }

  // Man, this got real ugly real fast
  shouldComponentUpdate(nextProps) {
    if (isEmpty(nextProps.active)) {
      setTimeout(() => {
        this.contentRef.current.scrollTo(0,0);
      }, 300);
    }
    if ((this.props.active || {}).longName !== (nextProps.active || {}).longName) {
      this.contentRef.current.scrollTo(0,0);
    }
    return true;
  }

  // Maybe implement invertbackground later. Also videos.
  render() {
    const {active, onArrows} = this.props;
    const {longName, homepage, sourceCode, description, images} = active || {};
    
    return (
      <div className={`content ${isEmpty(active) ? 'hide' : ''}`} ref={this.contentRef}>
        <div className='content-col'>
          <div className='description inner'>
            <h1 className='full-name'>{longName}</h1>
              {homepage && <div className='link'><a href={homepage} target='_blank'>homepage</a></div>}
              {sourceCode && <div className='link'><a href={sourceCode} target='_blank'>source code</a></div>}
              {description && description.map(this._generateEls)}
            <div className='bottom-spacer'></div>
          </div>
        </div>
        <div className='content-col'>
          <div className='visuals inner'>
            {images && images.map(this._generateImgs)}
            <div className='mobile-arrows-wrapper'>
              <Arrows className='mobile-arrows' onClick={onArrows} />
            </div>
            <div className='bottom-spacer'></div>
          </div>
        </div>
      </div>
    )
  }

  // TODO: Add lazy load
  _generateImgs(image, idx) {
    return (
      <div className='image-wrapper' key={idx}>
        <a href={image.src} target='_blank'>
          <img src={image.src} alt=''/>
        </a>
        <div className='caption'>{image.caption}</div>
      </div>
    )
  }

  _generateEls(section, idx) {
    if (typeof section === 'string') {
      return <p key={idx}>{section}</p>
    }

    switch (section.type) {
      case 'smallHeader':
        return <h4 key={idx}>{section.content}</h4>
      case 'bigHeader':
        return <h3 key={idx}>{section.content}</h3>
      case 'link':
        return <div key={idx} className='link'><a href={section.link} target='_blank'>{section.content}</a></div>
      case 'list':
        return (
          <ul key={idx}>
            {section.content.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        )
      case 'quote':
        return <p className="quote" key={idx}>{section.content}</p>
      default:
        return <p key={idx}>{section.content}</p>
    }
  }
}