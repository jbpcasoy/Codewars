export function spinWords(words: string): string {
  const wordList: string[] = words.split(" ");

  for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i];
    if (word.length >= 5) {
      wordList[i] = reverseWord(word);
    }
  }

  return wordList.join(" ");
}

function reverseWord(word: string): string {
  let store = word;
  let reversed = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversed += store[i];
  }

  return reversed;
}
