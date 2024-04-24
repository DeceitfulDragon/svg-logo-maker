const inquirer = require('inquirer');
const { buildSVG } = require('./lib/svgbuilder');
const fs = require('fs');

// using async for all this so I can just make one function here
async function init() {
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
        message: 'Enter shape color (or hex value):',
      },
    ]);

    const svg = buildSVG(userInput);

    // Write to file and log that it's done
    fs.writeFileSync('logo.svg', svg);
    console.log('Generated logo.svg!');

  } catch (error) { console.error('Error:', error); }
}

init();