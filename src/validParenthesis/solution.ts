export function validParentheses(parenStr: string): boolean {
  let count = 0;
  for (let i = 0; i < parenStr.length; i++) {
    const char = parenStr.charAt(i);

    if (char === "(") {
      count++;
    } else if (char === ")") {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }

  return count === 0;
}
