const zeroEks = require('0x')
const path = require('path')
 
async function capture () {
  const opts = {
    argv: [path.join(__dirname, 'index.js')],
    workingDir: __dirname
  }
  try {
    const file = await zeroEks(opts)
    console.log(`flamegraph in ${file}`)
  } catch (e) {
    console.error(e)
  }
}
 
capture()
