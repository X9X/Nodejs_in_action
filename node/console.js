console.log('hello world');
  // Prints: hello world, to stdout
console.log('hello %s', 'world');
  // Prints: hello world, to stdout
// console.error(new Error('Whoops, something bad happened'));
  // Prints: [Error: Whoops, something bad happened], to stderr

const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
  // Prints: Danger Will Robinson! Danger!, to stderr
const dir = {
  a : {
    b :1
  },
  c : 1
}
// console.trace(dir,{
//   colors : true
// })
