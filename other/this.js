// setTimeout(() => {
//   console.log('====================================');
//   console.log(1);
//   console.log('====================================');
// });
// setImmediate(() => {
//   console.log('====================================');
//   console.log(2);
//   console.log('====================================');
// })
// Promise.resolve().then(() => {
//   console.log('====================================');
//   console.log(3);
//   console.log('====================================');
// })
// process.nextTick(() => {
//   console.log('====================================');
//   console.log(4);
//   console.log('====================================');
// })


// var s = setInterval(() => {
//   console.log('====================================');
//   console.log(1);
//   console.log('====================================');
// }, 2000)

// clearInterval(s)

const setInterval = (callback, intervals) => {
  const setup = () => {
    setTimeout(() => {
      callback()
      setup();
    }, intervals);
  }
  setup();
}

setInterval(() => {
  console.log('====================================');
  console.log(1);
  console.log('====================================');
}, 1000)
