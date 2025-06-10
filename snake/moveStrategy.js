import { Point } from "./point.js";
export class MoveStrategy {
    computeNextPosition(snake, direction) {
      const head = snake.getHead();
      return new Point(head.x + direction.x, head.y + direction.y);
    }
}