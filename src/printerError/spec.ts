import { assert } from "chai";
import { printerError } from "./solution";

function testing(s: string, expected: string) {
  assert.strictEqual(printerError(s), expected);
}

describe("Fixed Tests printerError", function () {
  it("Basic tests", function () {
    let s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
    testing(s, "3/56");
    s = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
    testing(s, "6/60");
    s = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu";
    testing(s, "11/65");
  });
});
