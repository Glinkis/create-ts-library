import * as chai from 'chai';
import { bezier, tangent } from '../../src/splines/bezier';

const { expect } = chai;

describe('splines/bezier', () => {

  it('is a function', () => {
    expect(bezier).is.a('function');
  });

  it('works as linear (2 points)', () => {
    const points = [0, 1];
    expect(bezier(points, 0)).to.equal(0);
    expect(bezier(points, 0.25)).to.equal(0.25);
    expect(bezier(points, 0.5)).to.equal(0.5);
    expect(bezier(points, 0.75)).to.equal(0.75);
    expect(bezier(points, 1)).to.equal(1);
  });

  it('calculates the correct tangent as linear (2 points)', () => {
    const points = [0, 1];
    expect(tangent(points, 0)).to.deep.equal([0, 1]);
    expect(tangent(points, 0.25)).to.deep.equal([0, 1]);
    expect(tangent(points, 0.5)).to.deep.equal([0, 1]);
    expect(tangent(points, 0.75)).to.deep.equal([0, 1]);
    expect(tangent(points, 1)).to.deep.equal([0, 1]);
  });

  it('works as quadratic (3 points)', () => {
    const points = [0, 1, 2];
    expect(bezier(points, 0)).to.equal(0);
    expect(bezier(points, 0.25)).to.equal(0.5);
    expect(bezier(points, 0.5)).to.equal(1);
    expect(bezier(points, 0.75)).to.equal(1.5);
    expect(bezier(points, 1)).to.equal(2);
  });

  it('calculates the correct tangent as quadratic (3 points)', () => {
    const points = [0, 1, 2];
    expect(tangent(points, 0)).to.deep.equal([0, 1]);
    expect(tangent(points, 0.25)).to.deep.equal([0.25, 1.25]);
    expect(tangent(points, 0.5)).to.deep.equal([0.5, 1.5]);
    expect(tangent(points, 0.75)).to.deep.equal([0.75, 1.75]);
    expect(tangent(points, 1)).to.deep.equal([1, 2]);
  });

  it('works as cubic (4 points)', () => {
    const points = [0, 1, 2, 3];
    expect(bezier(points, 0)).to.equal(0);
    expect(bezier(points, 0.25)).to.equal(0.75);
    expect(bezier(points, 0.5)).to.equal(1.5);
    expect(bezier(points, 0.75)).to.equal(2.25);
    expect(bezier(points, 1)).to.equal(3);
  });

  it('calculates the correct tangent as cubic (4 points)', () => {
    const points = [0, 1, 2, 3];
    expect(tangent(points, 0)).to.deep.equal([0, 1]);
    expect(tangent(points, 0.25)).to.deep.equal([0.5, 1.5]);
    expect(tangent(points, 0.5)).to.deep.equal([1, 2]);
    expect(tangent(points, 0.75)).to.deep.equal([1.5, 2.5]);
    expect(tangent(points, 1)).to.deep.equal([2, 3]);
  });

  it('works as quartic (5 points)', () => {
    const points = [0, 1, 2, 3, 4];
    expect(bezier(points, 0)).to.equal(0);
    expect(bezier(points, 0.25)).to.equal(1);
    expect(bezier(points, 0.5)).to.equal(2);
    expect(bezier(points, 0.75)).to.equal(3);
    expect(bezier(points, 1)).to.equal(4);
  });

});
