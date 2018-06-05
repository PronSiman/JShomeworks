let Shape = class Shape {
    constructor(color, initX, initY) {
        this.color = color;
        this.initX = initX;
        this.initY = initY;
    }
    getColor() {
        return `Current color is ${this.color}`
    }
    setColor(val) {
        this.color = val;
    }
    getCoords() {
        return `X coordinate is :${this.initX}
        Y coordinate is ${this.initY}`
    }
    moveTo(newX, newY) {
        this.initX = newX;
        this.initY = newY;
    }
}

class Rectangle extends Shape {
    constructor(color, initX, initY, initWidth, initHeight) {
        super(color, initX, initY)
        this.initHeight = initHeight;
        this.initWidth = initWidth;
    }
    setWidth(newWidth) {
        this.initWidth = newWidth;
    }
    setHeight(newHeight) {
        this.initHeight = newHeight;
    }
    getDims() {
        return `This width is: ${this.initWidth}
        this height is: ${this.initHeight}`
    }
    draw() {
        console.log(`Drawing a Rectangle at:
        (x: ${this.initX}, y: ${this.initY})
        Whit dementions:
        width: ${this.initWidth}
        height:${this.initHeight}
        Filled with color: ${this.color}`)
    }
}
class Circle extends Shape {
    constructor(color, initX, initY, initRadius) {
        super(color, initX, initY)
        this.initRadius = initRadius;
    }
    getRadius() {
        return `Current radius is ${this.initRadius}`
    }
    setRadius(val) {
        this.initRadius = val;
    }
    draw() {
        console.log(`Drawing a Circle at:
        (x: ${this.initX}, y: ${this.initY})
        Whith dimentions:
        radius: ${this.initRadius}
        Filled with color: ${this.color}`)
    }
}

let rect = new Rectangle('#009688', 10, 10, 100, 100);
let circ = new Circle('#FF5722', 50, 50, 250);
rect.draw();
circ.draw();