/*
Создать базовый класс Shape,
 который принимает значения цвета и координат x и y:
  color, initX, initY.
Создать методы класса Shape:
getColor() - возвращает значение цвета.
setColor(val) - получает и записывает новое значение цвета.
getCoords() - возвращает координаты x и y.
moveTo(newX, newY) - принимает 2 параметра,
 новые значения для x и y и записывает их.
Создать класс Rectangle который расширяет класс Shape,
 принимая значения цвета и начальных координат,
  как его родительский класс,
   и еще значение ширины и высоты сторон
    initWidth и initHeight:
Создать методы класса Rectangle:
setWidth(newWidth)и setHeight(newHeight) 
- получают ширину/высоту и записывают новые значения.
getDims() - метод который возвращает значения width и height.
draw() - метод который имитирует рисование прямоугольника
 используя методы Shape и Rectangle,
  выводя в консоль браузера следующей информации.


  FOTTTTTTOOOOOOOO
  
  Создать класс Circle который расширяет класс Shape,
   принимая значения цвета и начальных координат,
    как его родительский класс,
     и еще значение радиуса initRadius:
Создать методы класса Circle:
getRadius() - возвращает текущее значение радиуса.
setRadius(val) - получает значение и присваивает его радиусу.
draw() - метод который имитирует
 рисование круга используя методы Shape и Circle,
  выводя в консоль браузера следующей информации.
  
  */

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