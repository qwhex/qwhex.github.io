const fs = require('fs')
const pug = require('pug')

function compilePugs () {
  console.info('compiling pug files')
  const makeIndex = pug.compileFile('pug/index.pug')
  fs.writeFileSync('index.html', makeIndex())
}

if (require.main === module) {
  compilePugs()
}
