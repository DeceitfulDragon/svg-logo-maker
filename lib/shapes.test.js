const { buildSVG } = require('./svgbuilder');

describe('buildSVG', () => {
    it('should generate SVG for a circle', () => {
      const input = {
        text: 'DUJ',
        textColor: 'white',
        shape: 'Circle',
        shapeColor: '#33FF57',
      };

      const expectedSVG = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="80" fill="#33FF57" />
          <text x="150" y="120" font-size="50" text-anchor="middle" fill="white">DUJ</text>
        </svg>
      `.replace(/\s/g, ''); // Issues when comparing, fixed by removing white space

      expect(buildSVG(input).replace(/\s/g, '')).toEqual(expectedSVG);
    });
  
    it('should generate SVG for a triangle', () => {
      const input = {
        text: 'DUJ',
        textColor: '#5733FF',
        shape: 'Triangle',
        shapeColor: 'black',
      };

      const expectedSVG = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="150,20 280,180 20,180" fill="black" />
          <text x="150" y="130" font-size="50" text-anchor="middle" fill="#5733FF">DUJ</text>
        </svg>
      `.replace(/\s/g, ''); // Issues when comparing, fixed by removing white space

      expect(buildSVG(input).replace(/\s/g, '')).toEqual(expectedSVG);
    });
  
    it('should generate SVG for a square', () => {
      const input = {
        shape: 'Square',
        shapeColor: '#33FF57',
        text: 'DUJ',
        textColor: '#5733FF',
      };

      const expectedSVG = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#33FF57" />
          <text x="100" y="120" font-size="50" text-anchor="middle" fill="#5733FF">DUJ</text>
        </svg>
      `.replace(/\s/g, ''); // Issues when comparing, fixed by removing white space
      
      expect(buildSVG(input).replace(/\s/g, '')).toEqual(expectedSVG);
    });
  });