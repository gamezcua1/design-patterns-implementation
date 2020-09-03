abstract class Shape {
  x = 0;
  y = 0;
  color = "white";

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  abstract clone(): Shape;
}

class Square extends Shape {
  width = 0;

  constructor(x: number, y: number, color: string, width: number) {
    super(x, y, color);
    this.width = width;
  }

  clone(): Shape {
    return new Square(this.x, this.y, this.color, this.width)
  }
}

class Circle extends Shape {
  radius = 0;

  constructor(x: number, y: number, color: string, radius: number) {
    super(x, y, color);
    this.radius = radius;
  }

  clone(): Shape {
    return new Circle(this.x, this.y, this.color, this.radius);
  }
}

const shapes: Shape[] = [];

const square1 = new Square(0, 0, 'white', 10);
shapes.push(square1);

const clonedSquare1 = square1.clone();
clonedSquare1.y = 20;
shapes.push(clonedSquare1)

const circle = new Circle(30, 0, 'black', 3)
shapes.push(circle)

const clonedCircle = circle.clone();
clonedCircle.y = 40;
shapes.push(clonedCircle)

console.log(shapes)

