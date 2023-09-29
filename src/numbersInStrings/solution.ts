export function solve(s: string): number {
  const numbers: number[] = [];
  let number: string = "";

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (!isNaN(Number(char))) {
      number += char;
    } else {
      numbers.push(Number(number));
      number = "";
    }
  }

  if (!isNaN(Number(number))) {
    numbers.push(Number(number));
    number = "";
  }

  numbers.sort((a, b) => {
    return b - a;
  });

  return numbers[0];
}
