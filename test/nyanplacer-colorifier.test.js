import colorifier from '../src/index'

test('Test consistency', () => {
  const boundColorifier = colorifier().bind(null, ['const'])
  const stringsToReplace = [
    'const a = 1;',
    'const a = 1;',
    'const a = 1;',
    'const a = 1;',
    'const a = 1;',
    'const a = 1;',
    'const a = 1;',
    'const a = 1;',
    'const a = 1;'
  ]
  const ethalone = boundColorifier(stringsToReplace[0])

  const result = stringsToReplace
        .map(boundColorifier)
        .map(item => ethalone === item)
        .reduce((acc, comparisonResult) => acc && comparisonResult, true)

  expect(result).toBe(true)
})

