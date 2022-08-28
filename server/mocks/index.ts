module.exports = (fileName: string) => {
    try {
      return require(`./${fileName}.json`);
    } catch (error) {
      return `${error}`;
    }
  };
  