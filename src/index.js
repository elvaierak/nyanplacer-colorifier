import nyanplacer from '@akarim/nyanplacer'

const getRandomItem = array => array[Math.floor(Math.random() * array.length)]

const getRandomColor = getRandomItem.bind(
  null,
  ['ccffcc', 'ccccff', 'ffcccc']
)

const cached = f => {
  const cache = {}

  return arg => {
    if (!cache[arg]) {
      cache[arg] = f(arg)
    }

    return cache[arg]
  }
}

const makeReplacer = getWordColor => {
  return word => `<span style="color: ${getWordColor(word)};">${word}</span>`
}

export default () => {
  const replacer = makeReplacer(cached(getRandomColor))

  return (words, str) => {
    const replacerObject = {}

    words.forEach(word => {
      replacerObject[word] = replacer
    })

    return nyanplacer(replacerObject, str)
  }
}
