import * as chai from 'chai';
import { cubic } from '../../../src/splines/bezier/cubic';

const { expect } = chai;

describe('splines/bezier/cubic', () => {

  it('is a function', () => {
    expect(cubic).is.a('function');
  });

  it('calculates the correct values', () => {
    const points = [0, 1, 2, 3];
    expect(cubic(points, 0)).to.equal(0);
    expect(cubic(points, 0.25)).to.equal(0.75);
    expect(cubic(points, 0.5)).to.equal(1.5);
    expect(cubic(points, 0.75)).to.equal(2.25);
    expect(cubic(points, 1)).to.equal(3);
  });

});
