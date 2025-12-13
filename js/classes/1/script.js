class Shape {
    get area() {
        
    }
}

class Circle extends Shape {
    constructor(radius){
        super();
        this.radius = radius;
        this.pi = 3.14;
    }
    get area(){
        return this.pi * (this.radius * this.radius);
    }
}

class Triangle extends Shape {
    constructor(base, height){
        super();
        this.base = base;
        this.height = height;
    }
    get area(){
        return (this.base * this.height) / 2;
    }
}

const circle = new Circle(4);
const tri = new Triangle(4, 10);

console.log(tri.area);
console.log(circle.area);