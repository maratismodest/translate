import React from 'react';

import icons from './icons.json';

export const Icon = (props) => {
  const { icon = 'device', size = 16, fill } = props;
  if (icon === true) {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 8L7.5 11L12 5.5" stroke="#0F8012" strokeLinecap="round" />
        <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" stroke="#0F8012" />
      </svg>
    );
  }
  if (icon === false) {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" stroke="#EA051C" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.64645 4.64645C4.84171 4.45118 5.15829 4.45118 5.35355 4.64645L8 7.29289L10.6464 4.64645C10.8417 4.45118 11.1583 4.45118 11.3536 4.64645C11.5488 4.84171 11.5488 5.15829 11.3536 5.35355L8.70711 8L11.3536 10.6464C11.5488 10.8417 11.5488 11.1583 11.3536 11.3536C11.1583 11.5488 10.8417 11.5488 10.6464 11.3536L8 8.70711L5.35355 11.3536C5.15829 11.5488 4.84171 11.5488 4.64645 11.3536C4.45118 11.1583 4.45118 10.8417 4.64645 10.6464L7.29289 8L4.64645 5.35355C4.45118 5.15829 4.45118 4.84171 4.64645 4.64645Z"
          fill="#EA051C"
        />
      </svg>
    );
  } else
    return (
      <svg viewBox="0 0 16 16" fill="currentColor" width={size} height={size} {...props}>
        <path
          as="path"
          clipRule="evenodd"
          fillRule="evenodd"
          d={icons[icon].path}
          fill={fill || icons[icon].fill}
          stroke={icons[icon].stroke}
        />
      </svg>
    );
};
export default Icon;
