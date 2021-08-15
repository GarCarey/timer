const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  if (isNaN(args[i]) || args[i] < 0){
    continue;
  }
  setTimeout(() => {
    process.stdout.write('.\n');
    //process.stdout.write('\x07'); didn't make any sound
  }, (args[i] * 1000))
}