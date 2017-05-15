import * as chai from 'chai';
import * as mocha from 'mocha';
import * as easing from '../../src/animation/easing';

const { describe, it } = mocha;
const { expect } = chai;

/** @param {number} number */
const round = number => Number(number.toFixed(6));
const ease = (method, number) => round(method(number));

function testEase(method, values) {
  it("is a function", () => {
    expect(method).to.be.a("function");
  });
  it("calculates correct values", () => {
    expect(ease(method, 0)).to.equal(values[0]);
    expect(ease(method, 0.25)).to.equal(values[1]);
    expect(ease(method, 0.5)).to.equal(values[2]);
    expect(ease(method, 0.75)).to.equal(values[3]);
    expect(ease(method, 1)).to.equal(values[4]);
  });
}

describe("linear", () =>
  testEase(easing.linear, [
    0, 0.25, 0.5, 0.75, 1,
  ]));

describe("easeInSin", () =>
  testEase(easing.easeInSine, [
    0, 0.07612, 0.292893, 0.617317, 1,
  ]));

describe("easeOutSine", () =>
  testEase(easing.easeOutSine, [
    0, 0.382683, 0.707107, 0.92388, 1,
  ]));

describe("easeInOutSine", () =>
  testEase(easing.easeInOutSine, [
    0, 0.146447, 0.5, 0.853553, 1,
  ]));
