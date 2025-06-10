import { Snake } from './snake.js';
import { Point } from './point.js';
import { Direction } from './direction.js';

export class SnakeBuilder {
  constructor() {
    this.startPoint = new Point(5, 5);
    this.length = 3;
    this.direction = Direction.RIGHT;
  }

  setStartPoint(point) {
    this.startPoint = point;
    return this;
  }

  setLength(length) {
    this.length = length;
    return this;
  }

  setDirection(direction) {
    this.direction = direction;
    return this;
  }

  build() {
    return new Snake(this.startPoint, this.length, this.direction);
  }
}
