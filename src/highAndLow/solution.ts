export class Kata {
  static highAndLow(numbers: string): string {
    const chars = numbers.split(" ");
    const min = chars.sort((a, b) => {
      return Number(a) - Number(b);
    })[0];
    const max = chars.sort((a, b) => {
      return Number(b) - Number(a);
    })[0];

    return `${max} ${min}`;
  }
}
