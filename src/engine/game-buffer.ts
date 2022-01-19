import { gameBufferRows, GameRow } from "./game-row";

export interface GameBuffer {
  width: number;

  height: number;

  rows: Array<GameRow>;
}


export function gameBufferEmpty(width: number, height: number): GameBuffer {
  const rows = Array.from(gameBufferRows(width, height));
  return {
    rows,
    width,
    height
  }
}