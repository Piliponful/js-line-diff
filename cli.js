const fs = require('fs');

const args = process.argv.slice(2);
if (args.length !== 2) {
  console.log('Usage: cli <fileA> <fileB>');
  process.exit(1);
}
const filename1 = args[0];
const filename2 = args[1];

const str1 = fs.readFileSync(filename1, 'utf8');
const str2 = fs.readFileSync(filename2, 'utf8');

const linesArr1 = str1.split("\n");
const linesArr2 = str2.split("\n");
linesArr1.pop();
linesArr2.pop();

const { diff } = require('./diff');

process.stdout.write(
  diff(linesArr1, linesArr2)
    .map((x, i) => `${i+1} ${x}`).join('\n') + '\n'
);