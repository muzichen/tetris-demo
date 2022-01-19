import { TetrominosType } from "./game-tetrominos";

export interface GameCell {
  ghost?: number;

  glow?: boolean;

  type?: TetrominosType
}


// generate a collection of empty cells.
export function* gameBufferCells(width: number): IterableIterator<GameCell> {
  for (let i = 0; i < width; i++) {
    yield {};
  }
}