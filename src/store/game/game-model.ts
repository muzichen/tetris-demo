import { GameBuffer } from "../../engine/game-buffer";
import { GameScreen } from "../../engine/game-screen";
import { TetrominosType } from "../../engine/game-tetrominos";

export enum GameStatus {
  WELCOME = 'welcome',

  STARTING = 'starting',

  RUNNING = 'running',

  PAUSED = 'paused',

  FINISHING = 'finishing',

  FINISHED = 'finished'
}

export type NextTetrominos = Array<TetrominosType | undefined>;

export interface GameModel {
  buffer: GameBuffer;

  status: GameStatus;

  next: NextTetrominos;

  level: number;

  next_max: number;

  screen: GameScreen;
}

export const GAME_INITIAL_STATE: GameModel = {
  buffer: {
    rows: [],
    width: 0,
    height: 0
  },
  next: [undefined, undefined, undefined],
  next_max: 3,
  status: GameStatus.WELCOME,
  level: 1,
  screen: []
}

export const GAME_NAME = 'game';