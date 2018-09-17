const startTime = new Date();
const LEN = 4 * Math.pow(10, 9);
var buffer = new ArrayBuffer(LEN / 8);
var view = new DataView(buffer);
const EXCETP = 100;
for(let i = 0; i < LEN; i++) {
  if (i === EXCETP) continue ;
  let bufferOffset = ~~(i / 8);
  let byteOffset = i % 8;
  let orinalValue = view.getUint8(bufferOffset, 1)
  let comp = 1 << byteOffset;
  view.setUint8(bufferOffset, orinalValue | comp);
}

function hasNumber(num) {
  let bufferOffset = ~~(num / 8);
  let byteOffset = num % 8;
  let comp = 1 << byteOffset;
  return (view.getUint8(bufferOffset) & comp) > 0;
}
console.log('====================================');
console.log(hasNumber(1));
console.log(hasNumber(99));
console.log(hasNumber(EXCETP));
console.log(hasNumber(200));
console.log(hasNumber(LEN - 1));
console.log(new Date() - startTime);
console.log('====================================');
