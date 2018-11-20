import { add } from "../src/add";

describe("add()", () => {
  it("adds two numbes", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
