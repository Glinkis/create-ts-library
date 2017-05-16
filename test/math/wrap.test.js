import * as chai from 'chai';
import { wrap } from '../../src/math/wrap';

const { expect } = chai;

describe('wrap', () => {

  it('is a function', () => {
    expect(wrap).is.a('function');
  });

  it('calculates the correct values', () => {
    expect(wrap(0, 0, 0)).to.equal(0);
    expect(wrap(0, 0, 10)).to.equal(0);
    expect(wrap(5, 0, 10)).to.equal(5);
    expect(wrap(10, 0, 10)).to.equal(0);
    expect(wrap(15, 0, 10)).to.equal(5);
    expect(wrap(5, 10, 0)).to.equal(5); // <-- inverted test
  });

});

