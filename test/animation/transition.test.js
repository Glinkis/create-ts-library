import { transition } from "../../src/animation/transition";

describe("dom/transition", () => {
  it("should do a correct positive transition", done => {
    transition(0, 50, 250, value => {
      if (value === 50) {
        done();
      }
    });
  });

  it("should do a correct negative transition", done => {
    transition(0, -50, 250, value => {
      if (value === -50) {
        done();
      }
    });
  });
});
