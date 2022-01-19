import { gameBufferCells, GameCell } from "./game-cell";

export interface GameRow {
  cells: Array<GameCell>,

  removed?: boolean;
}

// generate an empty collection of rows
export function* gameBufferRows(width: number, height: number): IterableIterator<GameRow> {
  for (let i = 0; i <height; i++) {
    yield { cells: Array.from(gameBufferCells(width)) }
  }
}