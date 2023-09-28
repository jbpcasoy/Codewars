export function printerError(s: string): string {
  const letters = "abcdefghijklm".split("");
  const sLetters = s.split("");
  const error = sLetters.filter((val) => {
    return !letters.includes(val);
  }).length;

  return `${error}/${s.length}`;
}
