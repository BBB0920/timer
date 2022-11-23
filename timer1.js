const args = process.argv;

for (let i = 2; i < args.length; i++) {

  if(Number(args[i]) && Number(args[i]) > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`Here is your beep at ${args[i]} seconds!`);
    }, args[i] * 1000)
  }

}
  