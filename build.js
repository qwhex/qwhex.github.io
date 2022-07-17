const fs = require('fs')
const pug = require('pug')
const package_json = require('./package.json')

function compile_page() {
  console.info('compiling pug...')

  const compile_index = pug.compileFile('pug/index.pug', {basedir: 'pug'})

  const index = compile_index({
    email: 'hello@micepapai.com',
    revised: Date(),
    revision: package_json.version,
    versionHash: '',
  })

  fs.writeFileSync('index.html', index)
}

if (require.main === module) {
  compile_page()
}
