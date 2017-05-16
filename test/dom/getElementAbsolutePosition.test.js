import * as chai from 'chai';
import { getElementAbsolutePosition } from '../../src/dom/getElementAbsolutePosition';

const { expect } = chai;

describe('dom/getElementAbsolutePosition', () => {

  it('is a function', () => {
    expect(getElementAbsolutePosition).to.be.a('function');
  });

  // TODO: More extensive tests.

});
