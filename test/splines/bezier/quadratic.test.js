import * as chai from 'chai';
import { quadratic } from '../../../src/splines/bezier/quadratic';

const { expect } = chai;

describe('splines/bezier/quadratic', () => {

  it('is a function', () => {
    expect(quadratic).is.a('function');
  });

  it('calculates the correct values', () => {
    const points = [0, 1, 2];
    expect(quadratic(points, 0)).to.equal(0);
    expect(quadratic(points, 0.25)).to.equal(0.5);
    expect(quadratic(points, 0.5)).to.equal(1);
    expect(quadratic(points, 0.75)).to.equal(1.5);
    expect(quadratic(points, 1)).to.equal(2);
  });

});
