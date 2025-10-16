class Shape{
    area(){
        return console.log("Other shape");
    }
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    area(){
        return console.log("Circle area: "+ 3.14 * (this.radius ** 2));
    }
}
class Rectangle extends Shape{
    constructor(width,height){
        super();
        this.width = width;
        this.height = height;
    }
    area(){
        return console.log("Rectangle area: " +(this.width * this.height));
    }
}
class Triangle extends Shape {
    constructor(base, height){
        super();
        this.base = base;
        this.height = height;
    }
    area(){
        return console.log("Triangle area: " + (this.base * this.height)/2);
    }
}

let shapes = [
    new Circle(5),
    new Rectangle(3,4),
    new Shape()
];

for (const shape of shapes){
    shape.area();
}

shapes.push(new Triangle(2,4));

for (const shape of shapes){
    shape.area();
}
