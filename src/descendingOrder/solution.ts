export function descendingOrder(n: number): number {
  const str = String(n);
  const chars = str.split("");
  chars.sort((a, b) => {
    return Number(b) - Number(a);
  });
  const result = chars.join("");

  return Number(result);
}
