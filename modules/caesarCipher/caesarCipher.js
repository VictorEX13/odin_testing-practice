const alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const punctuations = [
  ".",
  ",",
  "?",
  "!",
  ":",
  ";",
  "+",
  "-",
  "/",
  "*",
  "@",
  "#",
  "$",
  "%",
  "¨",
  "&",
  "(",
  ")",
  "[",
  "]",
  "{",
  "}",
  "=",
  "<",
  ">",
  "ª",
  "º",
  "°",
  "|",
  "\\",
  "'",
  '"',
  "`",
  "´",
  "_",
  "^",
  "~",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function caesarCipher(str, shift) {
  if (str === "") {
    return "";
  } else {
    if (alpha.includes(str.charAt(0))) {
      return (
        shiftChar(alpha, str.charAt(0), shift) +
        caesarCipher(str.slice(1), shift)
      );
    } else if (punctuations.includes(str.charAt(0))) {
      return (
        shiftChar(punctuations, str.charAt(0), shift) +
        caesarCipher(str.slice(1), shift)
      );
    } else {
      return (
        shiftChar(numbers, str.charAt(0), shift) +
        caesarCipher(str.slice(1), shift)
      );
    }
  }
}

function shiftChar(arr, selectedValue, shift) {
  if (arr.indexOf(selectedValue) > -1) {
    let resultIndex = arr.indexOf(selectedValue) + shift;
    if (resultIndex > arr.length - 1) {
      resultIndex -= arr.length;
    }
    return arr[resultIndex];
  } else {
    return selectedValue;
  }
}

export default caesarCipher;
