const chalk = require('chalk');

const DEBUG = false;

module.exports = {
  componentName: {
    type: 'input',
    name: 'componentName',
    message: 'Enter a Component name',
    suffix: chalk`\n  {dim.white.bold e.g.} {dim.white Button}, {dim.white Dialog}, {dim.white Icon}`,
    filter: (input) => {
      // Remove the word "component/Component" from the input
      console.log('here');
      const normalized = input.trim().replace('component', '').replace('Component', '');

      // And make sure the first letter is set to a capital letter
      const formatted =
        normalized.charAt(0).toUpperCase() + normalized.slice(1);
      return formatted;
    },
    validate: (input) => {
      // At least 3 characters, without the word "Component"
      if (
        input.length > 3 &&
        /^[A-Z][a-z]+/.test(input) &&
        !/component$/.test(input) &&
        !/Component$/.test(input)
      ) {
        return true;
      }

      return compressSpaces(chalk`
        {red.bold Component name should ...}
        - Start with an upper case letter
        - Be at least 3 letters in length
        - Omit the suffix "Component" for the component name
      `);
    },
  },
};
