/*
    Name: Brad Walther
*/



class Shape {
    constructor(sides = []) {
        this.sides = sides;
    }
    perimeter = () => this.sides.length != 0 ? this.sides.reduce((total, num) => total + num) : 0;
}

class Rectangle extends Shape {
    constructor(length = 0, width = 0) {
        super([length, width, length, width]);
        this.length = length;
        this.width = width;
    }
    area = () => (this.length)*(this.width);
}

class Triangle extends Shape {
    constructor(sideA = 0, sideB = 0, sideC = 0) {
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    area = () => {
        let s = ((this.sideA) + (this.sideB) + (this.sideC))/2;
        return Math.sqrt((s)*(s - this.sideA)*(s - this.sideB)*(s -this.sideC));
    }
}

let genericBlock = (arr) => {
    for (const element of arr) {
        length = element.length;
        stringElement = element.toString();
        switch(length) {
            case 0:
                console.log(`Shape with ${length} sides is unsupported`);
                break;
            case 1:
                console.log(`Shape with ${length} side is unsupported`);
                break;
            case 2:
                if (element[0] == element[1]) {
                    const perimeterResult = new Rectangle(...element).perimeter();
                    const areaResult = new Rectangle(...element).area();
                    console.log(`Square with sides ${stringElement} has a perimeter of ${perimeterResult} and area of ${areaResult}`);
                }
                else {
                    const perimeterResult = new Rectangle(...element).perimeter();
                    const areaResult = new Rectangle(...element).area();
                    console.log(`Rectangle with sides ${stringElement} has a perimeter of ${perimeterResult} and area of ${areaResult}`);
                }
                break;
            case 3:
                const perimeterResult = new Triangle(...element).perimeter();
                const areaResult = new Triangle(...element).area();
                console.log(`Triangle with sides ${stringElement} has a perimeter of ${perimeterResult} and area of ${areaResult}`);
                break;
        }
    }
}


// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];
genericBlock(data);


