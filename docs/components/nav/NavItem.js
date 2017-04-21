import React from 'react';
import { NavLink, Route } from 'react-router-dom';

export const NavItem = (props) => {
  const { className, children, name, path, component } = props;
  const url = `${path}${name}`;
  const route = component ?
    <Route path={url} component={component}/> : null;

  const classes = 'list-group-item ' + (className || '');
  const style = {
    padding: component ? '0' : '4pt',
    border: component ? 'none' : null,
  };

  return (
    <li className={classes} style={style}>
      <NavLink className='list-group-item' to={url}>
        {name}
      </NavLink>
      {route}
      {children}
    </li>
  );
};
