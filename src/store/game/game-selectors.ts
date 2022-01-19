import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectRoot } from "../select-root";
import { GameStatus } from "./game-model";

export namespace GameSelectors {
  export const game = createSelector(selectRoot, (state) => state.game);

  export const buffer = createSelector(game, (game) => game.buffer);
  export const screen = createSelector(game, (game) => game.screen);


  export const status = createSelector(game, (game) => game.status);

  export const welcoming = createSelector(status, (status) => status === GameStatus.WELCOME);
  export const starting = createSelector(status, (status) => status === GameStatus.STARTING);
  export const running = createSelector(status, (status) => GameStatus.RUNNING);

  export const size = createSelector(buffer, (buffer) => ({ 
    width: buffer.width,
    height: buffer.height
   }));

   export const screenCell = (index: number) => createSelector(screen, (screen) => screen[index]);
}