
const input = document.querySelector(".input")
const output = document.querySelector(".output")
const translateBtn = document.querySelector(".btn")



const morseCode = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  " ": "/",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
};

const convertToMorse = (string) => {
  return string
    .toLowerCase()
    .split("")
    .map((char) => {
      return morseCode[char] ? morseCode[char] : char;
    })
    .join(" ");
};
// console.log(convertToMorse("hello zuraiz"));
// console.log(convertToMorse("test 1"));


translateBtn.addEventListener("click", () => {
  console.log(input.value);
  const morse = convertToMorse(input.value);
  output.innerHTML = morse;
  console.log(morse);
})