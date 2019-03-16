import React, { Component } from 'react';
import { Link } from "react-router-dom";
import tags from './tags.json';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Txt extends Component {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    htmlFor: PropTypes.string,
    tag: PropTypes.oneOf(tags),
  };

  get sizeClasses() {
    return this.props.size && this.props.size.split(" ").map(size => `txt_${size}`);
  }

  get colorClasses() {
    // Should be capitalized
    return this.props.color && this.props.color.split(" ").map(color => `txt_color${color}`);
  }

  get lineClasses() {
    return this.props.line && this.props.line.split(" ").map(line => `txt_line${line}`);
  }

  get spaceClasses() {
    return this.props.space && this.props.space.split(" ").map(space => `txt_space${space}`);
  }

  get alignmentClasses() {
    return this.props.align && this.props.align.split(" ").map(alignment => `txt_${alignment}`);
  }

  get className() {
    const {
      uppercase,
      bold,
      light,
      btn,
      strike,
    } = this.props;

    return classnames(
      btn ? 'btn': 'txt',
      this.sizeClasses,
      this.colorClasses,
      this.lineClasses,
      this.spaceClasses,
      this.alignmentClasses,
      this.props.className,
      { 'txt_uppercase': uppercase },
      { 'txt_bold': bold },
      { 'txt_light': light },
      { 'txt_strike': strike },
    );
  }

  render() {
    const {
      tag: Tag,
      to,
      href,
      content,
      htmlFor,
    } = this.props;

    if (Tag === 'Link') {
      return (
        <Link className={this.className} to={to}>
          { content }
        </Link>
      );
    }

    return (
      <Tag className={this.className} href={href} htmlFor={htmlFor}>
        { content }
      </Tag>
    );
  }
}
