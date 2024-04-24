// SQUARE
class Square {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  setColor(color) {
    this.shapeColor = color;
  }

  render() {
    return `<rect width="200" height="200" fill="${this.shapeColor}" />`;
  }
}
// CIRCLE
class Circle {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  setColor(color) {
    this.shapeColor = color;
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}
// TRIANGLE
class Triangle {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  setColor(color) {
    this.shapeColor = color;
  }

  render() {
    return `<polygon points="150,20 280,180 20,180" fill="${this.shapeColor}" />`;
  }
}

module.exports = { Circle, Triangle, Square };
