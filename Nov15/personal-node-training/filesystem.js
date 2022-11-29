const { readFile, readFileSync } = require('fs');

// Blocking!
let txt = readFileSync('./notes.txt', 'utf8');
console.log(txt)


// Non-blocking
readFile('./notes.txt', 'utf8', (err, txt) => {
    console.log(txt)
});

// Promise based, also non-blocking
const { readFile } = require('fs').promises;

txt = await readFile('./notes.txt', 'utf8');