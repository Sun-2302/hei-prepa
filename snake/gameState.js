import { Point } from "./point.js";

export class GameState {
    handleInput(game, input) {}
    update(game) {}
    render(game) {}
  }
  
  export class MenuState extends GameState {
    render(game) {
      console.clear();
      console.log("=== SNAKE GAME ===\nAppuyez sur une touche pour démarrer...");
    }
  
    handleInput(game, input) {
      game.setState(new RunningState());
    }
  }
  
  export class RunningState extends GameState {
    update(game) {
      const next = game.moveStrategy.computeNextPosition(game.snake, game.direction);
  
      if (
        next.x < 0 ||
        next.y < 0 ||
        next.x >= game.gridSize ||
        next.y >= game.gridSize ||
        game.snake.hasCollided(next)
      ) {
        game.setState(new GameOverState());
        return;
      }
  
      if (next.equals(game.food)) {
        game.snake.grow();
        game.food = game.foodFactory.generate(game.snake);
      }
  
      game.snake.move(next);
    }
  
    render(game) {
      console.clear();
      for (let y = 0; y < game.gridSize; y++) {
        let row = "";
        for (let x = 0; x < game.gridSize; x++) {
          const p = new Point(x, y);
          if (game.snake.getHead().equals(p)) row += "O ";
          else if (game.snake.hasCollided(p)) row += "* ";
          else if (game.food.equals(p)) row += "@ ";
          else row += ". ";
        }
        console.log(row);
      }
    }
  }
  
  export class GameOverState extends GameState {
    render(game) {
      console.clear();
      console.log("Game Over ! Appuyez sur une touche pour recommencer...");
    }
  
    handleInput(game, input) {
      game.reset();
      game.setState(new RunningState());
    }
  }