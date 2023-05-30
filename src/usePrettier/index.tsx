import parserBabel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';

const usePrettier = (): {
  format: (content: string) => string;
} => {
  const format = (content: string): string => {
    return prettier.format(content, {
      plugins: [parserBabel],
      parser: 'babel',
    });
  };
  return {
    format,
  };
};

export default usePrettier;
