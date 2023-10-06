const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const MORSE_TABLE_MAP = new Map();
  Object.entries(MORSE_TABLE).forEach(([value, key]) => {
    MORSE_TABLE_MAP.set(value, key);
  });
  MORSE_TABLE_MAP.set("**********", " ");
  let charLength = 10;
  let newStr = [];
  for (let i = 0; i < expr.length; i += charLength)
    newStr.push(expr.slice(i, i + charLength));
  newStr.join("");

  expr = newStr.map((el) =>
    el.replaceAll(11, "-").replaceAll(10, ".").replaceAll("0", "")
  );

  let result = [];
  for (let i = 0; i < expr.length; i++) {
    result.push(MORSE_TABLE_MAP.get(expr[i]));
  }
  return result.join("");
}

module.exports = {
  decode,
};
