import { assert } from "chai";
import { validParentheses } from "./solution";

function runTest(expected: boolean, input: string) {
  // Note for translators: languages with mutable strings should also check here if the input was mutated
  assert.strictEqual(
    validParentheses(input),
    expected,
    `Test failed for input: "${input}"`
  );
}

describe("Valid Parenthesis", function () {
  // add more test cases if desired

  it("Should return true for valid parentheses", function () {
    runTest(true, "()");
    runTest(true, "((()))");
    runTest(true, "()()()");
    runTest(true, "(()())()");
    runTest(true, "()(())((()))(())()");
  });

  it("Should return false for invalid parentheses", function () {
    runTest(false, ")(");
    runTest(false, "()()(");
    runTest(false, "((())");
    runTest(false, "())(()");
    runTest(false, ")()");
    runTest(false, ")");
  });

  it("Should return true for empty strings", function () {
    runTest(true, "");
  });
});
