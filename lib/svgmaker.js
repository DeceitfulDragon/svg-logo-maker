const inquirer = require('inquirer');
const {buildSVG} = require('./shapes');

// using async to wait for things to get done
async function startGeneration() {
  try {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter acronym (up to 3 characters)',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter color keyword (or hex value):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Square', 'Triangle'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color:',
      },
    ]);

    await buildSVG(userInput);
    console.log('Generated logo.svg');

  } catch (error) { console.error('Error:', error); }
}

module.exports = { startGeneration };