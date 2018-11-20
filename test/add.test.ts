import { expect } from "chai";
import { add } from "../src/add";

describe("add()", () => {
  it("adds two numbes", () => {
    expect(add(1, 2)).equals(3);
  });
});
