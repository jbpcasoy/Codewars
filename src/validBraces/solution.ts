export function validBraces(braces: string): boolean {
  let count = { parenthesis: 0, bracket: 0, brace: 0 };
  let lastOpen: string[] = [];

  for (let i = 0; i < braces.length; i++) {
    const char = braces.charAt(i);

    if (char === "(") {
      count.parenthesis++;
      lastOpen.push("(");
    } else if (char === ")") {
      if (lastOpen.at(-1) !== "(") {
        return false;
      }

      count.parenthesis--;
      if (count.parenthesis < 0) {
        return false;
      }

      lastOpen.pop();
    }

    if (char === "{") {
      count.brace++;
      lastOpen.push("{");
    } else if (char === "}") {
      if (lastOpen.at(-1) !== "{") {
        return false;
      }

      count.brace--;
      if (count.brace < 0) {
        return false;
      }

      lastOpen.pop();
    }

    if (char === "[") {
      count.bracket++;
      lastOpen.push("[");
    } else if (char === "]") {
      if (lastOpen.at(-1) !== "[") {
        return false;
      }

      count.bracket--;
      if (count.bracket < 0) {
        return false;
      }

      lastOpen.pop();
    }
  }

  return count.parenthesis === 0 && count.brace === 0 && count.bracket === 0;
}
