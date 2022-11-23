const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  
  if (key === 'b') {
    process.stdout.write('\x07');
  }

  let keyArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for(let element of keyArr) {
    if (key === element) {
      console.log(`Setting timer for ${element} second...`);
      setTimeout(() => {
        process.stdout.write('\x07');
        console.log(`Here is your beep at ${element} seconds!`);
      }, Number(element) * 1000)
    }
  }

  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log('Thanks for using me,ciao!');
    process.exit();
  }
});