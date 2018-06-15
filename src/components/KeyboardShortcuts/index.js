// This app specific. ESC, LEFT/A, RIGHT/D
import { Component } from 'react'

export default class KeyboardShortcuts extends Component {
  componentDidMount() {
    window.addEventListener('keyup', this._keypressListener)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this._keypressListener);
  }

  _keypressListener = ({key}) => {
    const { onEsc, onArrows } = this.props;
    switch (key) {
      case 'Escape':
        onEsc.call(null, '');
        return;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        onArrows.call(null, 'prev');
        return;
      case 'ArrowRight':
      case 'd':
      case 'D':
        onArrows.call(null, 'next');
        return;
      default:
        return;
    }
  }

  render() {
    return null;
  }
}