import { assert } from "chai";
import { validBraces } from "./solution";

describe("Valid Braces", function () {
  it("should handle basic tests", function () {
    assert.strictEqual(validBraces("()"), true);
    assert.strictEqual(validBraces("[(])"), false);
  });
});
