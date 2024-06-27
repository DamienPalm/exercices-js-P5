let string = "";

function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    string += i;

    if (i < n) {
      string += " ";
    }
  }

  return string;
}

export default printNumbers;
