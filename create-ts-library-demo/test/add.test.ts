import { add } from "../src/add";

describe("add()", () => {
  it("adds two numbers", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
