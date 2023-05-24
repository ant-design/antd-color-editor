import prettier from 'prettier/standalone'
import parserBabel from 'prettier/parser-babel'

const usePrettier = (): {
  format: (content: string) => string
} => {
  const format = (content: string): string => {
    return prettier.format(content, {
      plugins: [parserBabel],
      parser: 'babel',
    })
  }
  return {
    format,
  }
}

export default usePrettier
