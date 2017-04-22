import React from 'react';
import { Route } from 'react-router-dom';
import { Page } from './Page';
import * as API from '../../api.json';
import { array } from '../../../src';

const getArrayType = (arrayType) => {
  const elements = arrayType.elements.map((element, i) =>
    <a key={i}>{element.name}</a>);

  return (
    <span>[ {
      array.intersperse(elements, ', ')
    } ]</span>
  );
};

const getRecordType = (recordType) => {
  const elements = recordType.fields.map((field, i) =>
    <a key={i}>{field.key}</a>);

  return (
    <span>
      {'{ '}
      {array.intersperse(elements, ', ')}
      {' }'}
    </span>
  );
};

const getFunctionParam = (param, i) => {
  const type = param.type.type;

  let value;
  if (param.type.name) {
    value = <a>{param.type.name}</a>;
  } else {
    if (type === 'ArrayType') {
      value = getArrayType(param.type);
    } else if (type === 'AllLiteral') {
      value = 'any';
    } else if (type === 'RecordType') {
      value = getRecordType(param.type);
    } else {
      value = 'void';
    }
  }

  return (
    <span key={i}>{value}</span>
  );
};

const getHeadingTrail = (obj) => {
  if (obj.kind !== 'function') {
    return null;
  }
  return (
    <span>
      ({array.intersperse(obj.params.map(getFunctionParam), ', ')})
      : {getFunctionParam(obj.returns[0])}
    </span>
  );
};

const getHeading = (obj) =>
  <div className="panel-heading">
    <span className="panel-title">
    {obj.name}
      {getHeadingTrail(obj)}
    </span>
  </div>;


const getBody = (obj) =>
  <div className="panel-body">
    <div className="well">{obj.kind}</div>
  </div>;

const getPage = (obj) =>
  <Page>
    <div className="panel panel-default">
      {getHeading(obj)}
      {getBody(obj)}
    </div>
  </Page>;

const contentRoutes = (function () {
  return Object.keys(API).map((key, i) => {
    const obj = API[key];
    if (!obj.name) return;
    const component = () => getPage(obj);
    return <Route key={i} path={"/docs/" + obj.name} component={component}/>;
  });
}());

export const Content = () =>
  <div className="col-xs-8">
    {contentRoutes}
  </div>;
