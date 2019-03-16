import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Blocks(props) {
  function getClasses() {
    return props.classes && props.classes.split(" ").map(listClasses => `blocks_${listClasses}`);
  }

  function getClassName() {
    return classnames(
      'blocks',
      getClasses(),
      props.className,
    );
  }

  return (
    <ul className={getClassName()}>
      {props.children}
    </ul>
  );
}

Blocks.propTypes = {
  'classes': PropTypes.string,
};
