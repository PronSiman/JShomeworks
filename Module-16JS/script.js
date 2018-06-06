let Shape = class Shape {
    constructor(color, initX, initY) {
        this.color = color;
        this.initX = initX;
        this.initY = initY;
    }
    getColor() {
        return this.color
    }
    setColor(newColor) {
        this.color = newColor;
    }
    getCoords() {
        return [this.initX, this.initY];

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
        return [this.initWidth, this.initHeight];
    }
    draw() {
        console.log(`Drawing a Rectangle at:
            (x: ${this.getCoords()[0]}, y: ${this.getCoords()[1]})
            Whit dementions:
            width: ${this.getDims()[0]}
            height:${this.getDims()[1]}
            Filled with color: ${this.getColor()}`)
    }

}
class Circle extends Shape {
    constructor(color, initX, initY, initRadius) {
        super(color, initX, initY)
        this.initRadius = initRadius;
    }
    getRadius() {
        return this.initRadius;
    }
    setRadius(newRdius) {
        this.initRadius = newRdius;
    }
    draw() {
        console.log(`Drawing a Circle at:
        (x: ${this.getCoords()[0]}, y: ${this.getCoords()[1]})
        Whith dimentions:
        radius: ${this.getRadius()}
        Filled with color: ${this.getColor()}`)
    }
}

let rect = new Rectangle('#009688', 10, 10, 100, 100);
let circ = new Circle('#FF5722', 50, 50, 250);

rect.draw();
circ.draw()