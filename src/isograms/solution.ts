export function isIsogram(str: string): boolean {
  const formatted = str.toLocaleLowerCase();

  const countLetter = (char: string): number => {
    let count = 0;

    for (let i = 0; i < formatted.length; i++) {
      const letter = formatted.charAt(i);
      if (char === letter) {
        count++;
      }
    }

    return count;
  };

  for (let i = 0; i < formatted.length; i++) {
    const char = formatted.charAt(i);
    const count = countLetter(char);

    if (count > 1) {
      return false;
    }
  }

  return true;
}
