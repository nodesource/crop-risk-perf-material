const duration = process.env.EVENT_LOOP_BLOCK_TIME;

// Our Event Loop Blocker function
const blockEvL = (d) => {
  console.log('START BLOCKING', Date.now());
  const endTime = Date.now() + (d * 1000);
  while (Date.now() < endTime) {
    let rnd = Math.random();
    console.log(rnd)
  }
  console.log('STOP BLOCKING', Date.now());
};

function printSomething() {
  return new Promise(resolve => {
    resolve('🍣')
  })
}

async function asyncActions () {
  // Put async code calls here:
  const func = await printSomething()
  console.log('Message', func)
}

// Request handlers
asyncActions();
blockEvL(duration);
