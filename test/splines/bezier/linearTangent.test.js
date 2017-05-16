import * as chai from 'chai';
import { linearTangent } from '../../../src/splines/bezier/linearTangent';

const { expect } = chai;

describe('splines/bezier/linearTangent', () => {

  it('is a function', () => {
    expect(linearTangent).is.a('function');
  });

  it('calculates the correct values', () => {
    const points = [0, 1];
    expect(linearTangent(points, 0)).to.deep.equal([0, 1]);
    expect(linearTangent(points, 0.25)).to.deep.equal([0, 1]);
    expect(linearTangent(points, 0.5)).to.deep.equal([0, 1]);
    expect(linearTangent(points, 0.75)).to.deep.equal([0, 1]);
    expect(linearTangent(points, 1)).to.deep.equal([0, 1]);
  });

});
