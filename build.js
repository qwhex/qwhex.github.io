const fs = require('fs')
const pug = require('pug')
const package_json = require('./package.json')

function compile_page() {
  console.info('⚙️  compiling pugs...')

  const compile_index = pug.compileFile('pug/index.pug', {basedir: 'pug'})

  const index = compile_index({
    email: 'hello@micepapai.com',
    themeColor: '#f71559',
    revised: Date(),
    revision: package_json.version,
    cssPath: `css/q.min.css?${Date.now()}`,
  })

  fs.writeFileSync('index.html', index)

  console.info('✨ compiled pugs')
}

if (require.main === module) {
  compile_page()
}
