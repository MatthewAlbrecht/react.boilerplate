import React, { Component } from 'react';
import classnames from 'classnames';
import images from 'utils/images';

export default class Img extends Component {
  get images() {
    return images[this.props.name] || {};
  }

  get sizeClasses() {
    return this.props.size && this.props.size.split(' ').map(size => `img_${size}`);
  }

  get alignmentClasses() {
    return this.props.align && this.props.align.split(' ').map(alignment => `img_${alignment}`);
  }

  get className() {
    return classnames(
      'img',
      this.sizeClasses,
      this.alignmentClasses,
      this.props.className
    );
  }

  get src() {
    const {
      src,
      src2x,
      src3x,
    } = this.images;

    return src || src2x || src3x;
  }

  get srcSet() {
    let srcSet = '';
    const {
      src2x,
      src3x,
    } = this.images;

    srcSet += src2x ? `${src2x} 2x` : '';
    srcSet += (src2x && src3x) ? ', ' : '';
    srcSet += src3x ? `${src3x} 3x` : '';

    return srcSet;
  }

  render() {
    const {
      alt,
    } = this.props;

    return (
      <img
        src={this.src}
        srcSet={this.srcSet}
        alt={alt}
        className={this.className}
      />
    );
  }
}
