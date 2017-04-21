import React from 'react';
import { Page } from '../Page';

const getSubmodules = (obj) => Object.keys(obj).map(key => {
  return <div className='well well-sm' key={key}>{key}</div>;
});

export const Namespace = ({ name, object }) =>
  <Page className="panel panel-primary">
    <div className='panel-heading'>
      <span className='panel-title'>
        {name}
      </span>
    </div>
    <div className='panel panel-body'>
      {getSubmodules(object)}
    </div>
  </Page>;
