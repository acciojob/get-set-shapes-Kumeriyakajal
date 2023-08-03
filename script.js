//complete this code
class Rectangle {
	constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate the area of the rectangle
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Animal {
	constructor(side) {
    // Since Square is a subclass of Rectangle, we can call the constructor of the parent class using "super".
    super(side, side);
  }

  // Method to calculate the perimeter of the square
  getPerimeter() {
    return 4 * this.width;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
