import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Btn extends Component {
  get classes() {
    return this.props.classes && this.props.classes.split(" ").map(btnClass => `btn_${btnClass}`);
  }

  get className() {
    const {
      pill,
      full,
    } = this.props;

    return classnames(
      'btn',
      this.classes,
      this.props.className,
      { 'btn_pill': pill },
      { 'btn_full': full },
    );
  }

  render() {
    const {
      content,
      disabled,
      onClick,
    } = this.props;

    return (
      <button className={this.className} disabled={disabled} onClick={onClick}>
        {content}
      </button>
    );
  }
}

Btn.propTypes = {
  content: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
