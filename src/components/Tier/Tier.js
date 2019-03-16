import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Tier(props) {
  function getClasses() {
    return props.classes && props.classes.split(" ").map(tierClass => `tier_${tierClass}`);
  }

  function getClassName() {
    return classnames(
      'tier',
      getClasses(),
      props.className,
    );
  }

  return (
    <section className={getClassName()}>
      {props.children}
    </section>
  );
}

Tier.propTypes = {
  'classes': PropTypes.string,
};
