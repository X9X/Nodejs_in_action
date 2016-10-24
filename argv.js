// print process.argv
process.argv.forEach((val, index, array) => {
  console.log(`${index}: ${val}`);
});
// 这里与npm的 argv不同
