function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return str.charAt(str.length - 1) + reverseString(str.slice(0, -1));
  }
}

export default reverseString;
