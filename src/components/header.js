import React from 'react';

const Header = ({ name, contacts }) => {
  return React.createElement(
    'header',
    {
      className: 'cv-header',
    },
    [
      React.createElement(
        'h1',
        {
          className: 'cv-name',
        },
        'Jan Novák'
      ),
    ]
  );
};

export default Header;
