import * as chai from 'chai';
import { mapToRange } from '../../src/math/mapToRange';

const { expect } = chai;

describe('math/mapToRange', () => {

  it('is a function', () => {
    expect(mapToRange).is.a('function');
  });

  it('calculates the correct values', () => {
    expect(mapToRange(1, 0, 0, 0, 0)).to.equal(0);
    expect(mapToRange(1, 0, 1, 0, 0)).to.equal(0);
    expect(mapToRange(1, 0, 0, 0, 1)).to.equal(0);
    expect(mapToRange(1, 0, 1, 0, 1)).to.equal(1);
    expect(mapToRange(1, 0, 1, 0, 10)).to.equal(10);
    expect(mapToRange(10, 0, 1, 0, 10)).to.equal(100);
    expect(mapToRange(10, 0, 10, 0, 1)).to.equal(1);
  });

});
