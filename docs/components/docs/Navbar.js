import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () =>
  <div className='navbar navbar-default navbar-static-top'>
    <div className='container'>
      <div className='navbar-header'>
        <Link to='/' className='navbar-brand'>jslib</Link>
      </div>
      <nav className='navbar-collapse collapse'>
        <ul className='nav navbar-nav'>
          <li><Link to='/docs'>Docs</Link></li>
        </ul>
      </nav>
    </div>
  </div>;
