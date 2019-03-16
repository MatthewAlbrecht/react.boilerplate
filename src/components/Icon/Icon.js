import React from 'react';
import Info from './Icons/Info';

export default function Icon(props) {
  const iconMap = {
    'Info': <Info/>,
  };

  return (
    <i className={props.className}>
      {iconMap[props.type]}
    </i>
  );
}
