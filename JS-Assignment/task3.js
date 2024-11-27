
class Shape {
    calcArea() {
        console.log("use subclass instance")
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius
    }

    calcArea() {
        return Math.PI * Math.pow(this.radius, 2)
    }
}


class Triangle extends Shape {
    constructor(base, height) {
        super()
        this.base = base
        this.height = height
    }

    
    calcArea() {
        return 0.5 * this.base * this.height
    }
}


const circle = new Circle(7); 
console.log(`Area of Circle: ${circle.calcArea()}`)


const triangle = new Triangle(10, 8)
console.log(`Area of Triangle: ${triangle.calcArea()}`)

const shape = new Shape()
shape.calcArea() 