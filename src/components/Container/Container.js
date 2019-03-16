import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Container(props) {
  function getClasses() {
    return props.classes && props.classes.split(" ").map(containerClass => `container_${containerClass}`);
  }

  function getClassName() {
    return classnames(
      'container',
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

Container.propTypes = {
  'classes': PropTypes.string,
};
