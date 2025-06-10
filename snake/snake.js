  import { Point } from './point.js';

  export class Snake {
    constructor(startPoint, length, direction) {
      this.body = [];
      this.direction = direction;
      for (let i = 0; i < length; i++) {
        this.body.push(new Point(startPoint.x - i, startPoint.y));
      }
      this.growNext = false;
    }

    getHead() {
      return this.body[0];
    }

    move(nextPoint) {
      this.body.unshift(nextPoint);
      if (!this.growNext) {
        this.body.pop();
      } else {
        this.growNext = false;
      }
    }

    grow() {
      this.growNext = true;
    }

    hasCollided(point) {
      return this.body.some((p) => p.equals(point));
    }
  }