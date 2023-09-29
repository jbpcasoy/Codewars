export function order(words: string): string {
  const wordList = words.split(" ");
  const numList = words
    .split("")
    .filter((val) => !isNaN(Number(val)) && val !== " ");

  const arranged: string[] = [];
  let index = 0;

  while (arranged.length < wordList.length) {
    const wordIndex = numList.indexOf(`${index + 1}`);
    arranged.push(wordList[wordIndex]);
    index++;
  }

  return arranged.join(" ");
}
