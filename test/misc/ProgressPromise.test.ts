import { expect } from "chai";
import * as mocha from "mocha";
import { ProgressPromise } from "../../src/misc/ProgressPromise";

function testProgress(expected: number[]) {
  let index = 0;
  return (value?: number) => value === expected[index++];
}

function longTask() {
  return new ProgressPromise((resolve, reject, progress) => {
    setTimeout(() => progress(0), 0);
    setTimeout(() => progress(25), 50);
    setTimeout(() => progress(50), 100);
    setTimeout(() => progress(75), 150);
    setTimeout(() => progress(100), 200);
    setTimeout(resolve, 250);
  });
}

describe("misc/ProgressPromise", () => {
  it("triggers progress as expected", done => {
    const progressTest = testProgress([0, 25, 50, 75, 100]);
    longTask()
      .progress(value => expect(progressTest(value)).to.be.true)
      .then(done)
      .catch(console.error);
  });

  it("works with Promise.all", done => {
    const progressTest0 = testProgress([0, 25, 50, 75, 100]);
    const progressTest1 = testProgress([0, 25, 50, 75, 100]);
    Promise.all([
      longTask().progress(value => expect(progressTest0(value)).to.be.true),
      longTask().progress(value => expect(progressTest1(value)).to.be.true)
    ])
      .then(results => done())
      .catch(console.error);
  });
});
