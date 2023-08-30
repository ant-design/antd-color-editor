import prettier from 'prettier/standalone';

const usePrettier = (): {
  format: (content: string) => Promise<string>;
} => {
  return {
    format: prettier.format,
  };
};

export default usePrettier;
