class Flower {
    constructor(outerR, innerR, c, petals, offsetAngle) {
        this.outerR = outerR;
        this.innerR = innerR;
        this.c = c;
        this.petalCount = petals;
        this.angle = offsetAngle;
    }

    draw() {
        noStroke();
        fill(this.c);

        for(let i = 0; i < this.petalCount; i++) {
            let baseAngle = (TWO_PI / this.petalCount) * i + this.angle;
            let nextAngle = (TWO_PI / this.petalCount) * (i + 1) + this.angle;
            let middleAngle = (baseAngle + nextAngle) / 2;

            let x1 = this.outerR * cos(baseAngle);
            let y1 = this.outerR * sin(baseAngle);
            let x2 = this.outerR * cos(nextAngle);
            let y2 = this.outerR * sin(nextAngle);
            let x3 = this.innerR * cos(middleAngle);
            let y3 = this.innerR * sin(middleAngle);

            beginShape();
            vertex(x1, y1);
            vertex(x2, y2);
            vertex(x3, y3);
            endShape(CLOSE);
        }
    }
}