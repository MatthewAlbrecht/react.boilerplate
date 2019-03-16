import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function MaxWidth(props) {
  function getClasses() {
    return props.classes && props.classes.split(" ").map(maxWidthClass => `maxWidth_${maxWidthClass}`);
  }

  function getSizeClasses() {
    return props.size && props.size.split(" ").map(sizeClass => `maxWidth_${sizeClass}`);
  }

  function getClassName() {
    return classnames(
      'maxWidth',
      getSizeClasses(),
      getClasses(),
      props.className,
    );
  }

  return (
    <div className={getClassName()}>
      {props.children}
    </div>
  );
}

MaxWidth.propTypes = {
  'classes': PropTypes.string,
  'size': PropTypes.string,
};
