import { Component } from 'react';

export default class TabListener extends Component {
  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp(e) {
    if (e.keyCode === 9) {
      document.documentElement.classList.add('js-tabbing-active');
    }
  }

  render() {
    return null;
  }
}
