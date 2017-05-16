import * as chai from 'chai';
import { linear } from '../../../src/splines/bezier/linear';

const { expect } = chai;

describe('splines/bezier/linear', () => {

  it('is a function', () => {
    expect(linear).is.a('function');
  });

  it('calculates the correct values', () => {
    expect(linear([0, 1], 0)).to.equal(0);
    expect(linear([0, 1], 0.25)).to.equal(0.25);
    expect(linear([0, 1], 0.5)).to.equal(0.5);
    expect(linear([0, 1], 0.75)).to.equal(0.75);
    expect(linear([0, 1], 1)).to.equal(1);
  });

});
