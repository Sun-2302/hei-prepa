import readline from "readline";
import { Direction } from "./direction.js";
import { MoveStrategy } from "./moveStrategy.js";
import { FoodFactory } from "./foodFactory.js";
import { SnakeBuilder } from "./snakeBuilder.js";
import { MenuState } from "./gameState.js";

export class Game {
  constructor(gridSize = 10) {
    this.gridSize = gridSize;
    this.foodFactory = new FoodFactory(gridSize);
    this.moveStrategy = new MoveStrategy();
    this.readline = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this.readline.on("line", (line) => {
      this.handleInput(line);
    });

    this.setState(new MenuState());
    this.reset();
    this.loop();
  }

  reset() {
    this.direction = Direction.RIGHT;
    this.snake = new SnakeBuilder().build();
    this.food = this.foodFactory.generate(this.snake);
  }

  setState(state) {
    this.state = state;
    this.state.render(this);
  }

  handleInput(input) {
    const dir = input.trim().toUpperCase();
    if (dir === "Z") this.direction = Direction.UP;
    else if (dir === "S") this.direction = Direction.DOWN;
    else if (dir === "Q") this.direction = Direction.LEFT;
    else if (dir === "D") this.direction = Direction.RIGHT;
    this.state.handleInput(this, input);
  }

  loop() {
    setInterval(() => {
      this.state.update(this);
      this.state.render(this);
    }, 500);
  }
}
