export function bouncingBall(
  h: number,
  bounce: number,
  window: number
): number {
  if (!(h > 0 && bounce > 0 && bounce < 1 && window < h)) {
    return -1;
  }

  const bounceCount = (Math.log(window) - Math.log(h)) / Math.log(bounce);
  const viewCount = Math.ceil(bounceCount) * 2 - 1;

  return viewCount;
}
