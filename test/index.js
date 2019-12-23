

const { CLIEngine } = require('eslint')
const test = require('tape')

test('validate syntax', t => {
  const code = `import React from 'react'\n\nconsole.log(<div />)\n`
  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'index.js',
  })

  const { errorCount, warningCount } = cli.executeOnText(code)

  t.equal(errorCount + warningCount, 0)
  t.end()
})
