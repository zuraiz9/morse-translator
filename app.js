// translate english to morse
// translate morse to english

//break it down

// store morse code
// 1) Object - key: eng, value: morse
// 2) Array - morse array, eng array
// 3) Control Flow - If statements / switch

// Get English
// 1) text input on the page (input tag)
// 2) get input from alert

//Display Output
// 1) <p></p>
// 2) input
// 3) Alert it

// How to run functionality
// 1) Button with click event
// 2) Event on keycode
// 3) Submit event
// 4) OnChange event

// Validation
// 1) If statement, if not valid alert user / display some message
// 2) .slice / .splice / .split
// 3) ..- / .. / ... /

// const input = document.querySelector("input");
// const submit = document.querySelector(".submit");

// input.innerHTML = "hello";
// console.log(input);

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
