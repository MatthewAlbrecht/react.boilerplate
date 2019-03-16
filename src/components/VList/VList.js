import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function VList(props) {
  function getClasses() {
    return props.classes && props.classes.split(" ").map(listClasses => `vList_${listClasses}`);
  }

  function getClassName() {
    return classnames(
      'vList',
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

VList.propTypes = {
  'classes': PropTypes.string,
};
