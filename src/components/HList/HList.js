import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function HList(props) {
  function getClasses() {
    return props.classes && props.classes.split(" ").map(listClasses => `hList_${listClasses}`);
  }

  function getClassName() {
    return classnames(
      'hList',
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

HList.propTypes = {
  'classes': PropTypes.string,
};
