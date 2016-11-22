const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//
// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log('Thank you for your valuable feedback:', answer);
//
//   rl.close();
// });


rl.write('Delete this!');
// Simulate Ctrl+u to delete the line written previously
rl.write(null, {ctrl: true, name: 'u'});
rl.write('Delete this!');
