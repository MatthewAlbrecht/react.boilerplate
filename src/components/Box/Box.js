import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Box(props) {
  function getClasses() {
    return props.classes && props.classes.split(" ").map(boxClass => `box_${boxClass}`);
  }

  function getClassName() {
    return classnames(
      'box',
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

Box.propTypes = {
  'classes': PropTypes.string,
};
