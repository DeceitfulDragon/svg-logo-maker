const { Circle, Triangle, Square } = require('./shapes');

function buildSVG(input) {
  let shapeSVG;
  let textSVG;

  // Switch for selected shape
  switch (input.shape) {
    case 'Circle':
      const circle = new Circle(input.shapeColor);
      shapeSVG = circle.render();
      textSVG = `<text x="150" y="120" font-size="50" text-anchor="middle" fill="${input.textColor}" >${input.text}</text>`;
      break;

    case 'Triangle':
      const triangle = new Triangle(input.shapeColor);
      shapeSVG = triangle.render();
      textSVG = `<text x="150" y="130" font-size="50" text-anchor="middle" fill="${input.textColor}" >${input.text}</text>`;
      break;

    case 'Square':
      const square = new Square(input.shapeColor);
      shapeSVG = square.render();
      textSVG = `<text x="150" y="120" font-size="50" text-anchor="middle" fill="${input.textColor}" >${input.text}</text>`;
      break;

    default:
      throw new Error('Incorrect shape, somehow');
  }

  // Combine shape and text
  // https://www.w3.org/TR/SVG/
  const combined = `
    <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        ${shapeSVG}
        ${textSVG}
    </svg>
  `;
  return combined;
}

module.exports = { buildSVG };