import wordBank from "./wordle-bank.txt";
export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordset;
  let todaysWord;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      todaysWord=wordArr[Math.floor(Math.random()* wordArr.length)]
      // todaysWord="false"
      wordset = new Set(wordArr);
    });

  return { wordset, todaysWord};
};
