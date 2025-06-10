import { Point } from './point.js';

export class FoodFactory {
  constructor(gridSize) {
    this.gridSize = gridSize;
  }

  generate(snake) {
    let point;
    do {
      point = new Point(
        Math.floor(Math.random() * this.gridSize),
        Math.floor(Math.random() * this.gridSize)
      );
    } while (snake.hasCollided(point));
    return point;
  }
}