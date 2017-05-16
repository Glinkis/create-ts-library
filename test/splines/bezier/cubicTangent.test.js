import * as chai from 'chai';
import { cubicTangent } from '../../../src/splines/bezier/cubicTangent';

const { expect } = chai;

describe('splines/bezier/cubicTangent', () => {

  it('is a function', () => {
    expect(cubicTangent).is.a('function');
  });

  it('calculates the correct values', () => {
    const points = [0, 1, 2, 3];
    expect(cubicTangent(points, 0)).to.deep.equal([0, 1]);
    expect(cubicTangent(points, 0.25)).to.deep.equal([0.5, 1.5]);
    expect(cubicTangent(points, 0.5)).to.deep.equal([1, 2]);
    expect(cubicTangent(points, 0.75)).to.deep.equal([1.5, 2.5]);
    expect(cubicTangent(points, 1)).to.deep.equal([2, 3]);
  });

});
