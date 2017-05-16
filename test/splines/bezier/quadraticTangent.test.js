import * as chai from 'chai';
import { quadraticTangent } from '../../../src/splines/bezier/quadraticTangent';

const { expect } = chai;

describe('splines/bezier/quadraticTangent', () => {

  it('is a function', () => {
    expect(quadraticTangent).is.a('function');
  });

  it('calculates the correct values', () => {
    const points = [0, 1, 2];
    expect(quadraticTangent(points, 0)).to.deep.equal([0, 1]);
    expect(quadraticTangent(points, 0.25)).to.deep.equal([0.25, 1.25]);
    expect(quadraticTangent(points, 0.5)).to.deep.equal([0.5, 1.5]);
    expect(quadraticTangent(points, 0.75)).to.deep.equal([0.75, 1.75]);
    expect(quadraticTangent(points, 1)).to.deep.equal([1, 2]);
  });

});
