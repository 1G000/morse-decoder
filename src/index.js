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
  Object.entries(MORSE_TABLE).forEach(([key, value]) => {
    MORSE_TABLE_MAP.set(value, key);
  });
  let result = [];
  for (let i = 0; i < expr.length; i++) {
    result.push(MORSE_TABLE_MAP.get(expr.charAt(i)));
  }
  console.log(result);
  result = result.map((el) => el.replaceAll("-", 11).replaceAll(".", 10));
  result = result.map((el) => {
    el = el.split("");
    while (el.length < 8) {
      el.unshift(0);
    }

    return el.join("");
  });

  return console.log(result.join(""));
}

decode("me");

module.exports = {
  decode,
};
